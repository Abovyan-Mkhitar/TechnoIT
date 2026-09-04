// DevsBloom — GSAP interaction layer (smooth scroll, cursor, nav, reveals,
// magnetic buttons, counters, accordion, contact form).
document.documentElement.classList.remove("no-js");

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
const Lenis = window.Lenis;
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

/* ---------------- Smooth scroll (Lenis + GSAP ticker) ---------------- */
let lenis = null;
if (Lenis && !prefersReduced) {
  lenis = new Lenis({
    duration: 1.05,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  if (gsap) {
    lenis.on("scroll", () => ScrollTrigger && ScrollTrigger.update());
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  } else {
    requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    });
  }
}

function scrollToTarget(target, offset = 0) {
  if (lenis) {
    lenis.scrollTo(target, { offset });
  } else if (typeof target === "string") {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({ top: target, behavior: "smooth" });
  }
}

// Intercept in-page anchor links for smooth scroll + close mobile nav.
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href*="#"]');
  if (!link) return;
  const url = new URL(link.href, window.location.href);
  if (url.pathname !== window.location.pathname) return;
  const hash = url.hash;
  if (!hash || hash === "#") return;
  const el = document.querySelector(hash);
  if (!el) return;
  e.preventDefault();
  closeMobileNav();
  scrollToTarget(el, -20);
  history.pushState(null, "", hash);
});

/* ---------------- Preloader ---------------- */
const preloader = document.getElementById("preloader");
const preBar = preloader?.querySelector(".pre-bar span");
const preCount = preloader?.querySelector(".pre-count");
document.documentElement.classList.add("no-scroll");

function runPreloader() {
  const state = { p: 0 };
  const tl = gsap
    ? gsap.timeline()
    : null;

  function setPct(p) {
    if (preBar) preBar.style.width = p + "%";
    if (preCount) preCount.textContent = String(Math.round(p)).padStart(2, "0") + "%";
  }

  if (!gsap) {
    setPct(100);
    finishPreloader();
    return;
  }

  gsap.to(state, {
    p: 88,
    duration: 1.5,
    ease: "power1.out",
    onUpdate: () => setPct(state.p),
  });

  const onLoad = () => {
    gsap.to(state, {
      p: 100,
      duration: 0.4,
      ease: "power1.out",
      onUpdate: () => setPct(state.p),
      onComplete: finishPreloader,
    });
  };

  if (document.readyState === "complete") {
    setTimeout(onLoad, 900);
  } else {
    window.addEventListener("load", () => setTimeout(onLoad, 300));
  }
}

function finishPreloader() {
  document.documentElement.classList.remove("no-scroll");
  if (!preloader) {
    heroIntro();
    return;
  }
  if (!gsap) {
    preloader.style.display = "none";
    heroIntro();
    return;
  }
  gsap.timeline()
    .to(preloader.querySelectorAll(".pre-mark, .pre-count, .pre-bar"), {
      opacity: 0,
      duration: 0.35,
      stagger: 0.05,
    })
    .to(preloader, {
      yPercent: -100,
      duration: 0.7,
      ease: "power4.inOut",
      onComplete: () => {
        preloader.style.display = "none";
      },
    }, "-=0.1")
    .call(heroIntro, [], "-=0.4");
}

/* ---------------- Hero intro ---------------- */
function heroIntro() {
  if (!gsap) return;
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
  tl.to(".hero h1 .word span", { yPercent: 0, duration: 1.1, stagger: 0.06 })
    .to(".hero-kicker, .hero-socials", { opacity: 1, y: 0, duration: 0.9 }, "-=0.7")
    .to(".hero-bottom", { opacity: 1, y: 0, duration: 0.9 }, "-=0.7")
    .to(".scroll-cue", { opacity: 1, duration: 0.6 }, "-=0.4")
    .to(".site-header", { opacity: 1, duration: 0.6 }, "-=0.8");
}

if (gsap) {
  gsap.set(".hero h1 .word span", { yPercent: 115 });
  gsap.set(".hero-kicker, .hero-socials, .hero-bottom", { opacity: 0, y: 20 });
  gsap.set(".scroll-cue", { opacity: 0 });
  gsap.set(".site-header", { opacity: 0 });
}

runPreloader();

/* ---------------- Custom cursor ---------------- */
if (hasFinePointer && !prefersReduced) {
  document.body.classList.add("has-cursor");
  const dot = document.getElementById("cursor");
  const ring = document.getElementById("cursor-ring");
  const ringPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: ringPos.x, y: ringPos.y };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    if (dot) {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    }
  });

  function ringLoop() {
    ringPos.x += (mouse.x - ringPos.x) * 0.18;
    ringPos.y += (mouse.y - ringPos.y) * 0.18;
    if (ring) {
      ring.style.left = ringPos.x + "px";
      ring.style.top = ringPos.y + "px";
    }
    requestAnimationFrame(ringLoop);
  }
  ringLoop();

  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a, button, .bento-card, .price-card, input, textarea")) {
      ring?.classList.add("is-active");
    }
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest("a, button, .bento-card, .price-card, input, textarea")) {
      ring?.classList.remove("is-active");
    }
  });
}

/* ---------------- Header + mobile nav ---------------- */
const header = document.querySelector(".site-header");
function onScrollHeader() {
  if (!header) return;
  header.classList.toggle("is-solid", window.scrollY > 40);
}
window.addEventListener("scroll", onScrollHeader, { passive: true });
onScrollHeader();

const navToggle = document.querySelector(".nav-toggle");
function closeMobileNav() {
  document.documentElement.classList.remove("nav-open");
  lenis?.start();
}
navToggle?.addEventListener("click", () => {
  const isOpen = document.documentElement.classList.toggle("nav-open");
  isOpen ? lenis?.stop() : lenis?.start();
});
document.querySelectorAll(".mobile-nav a").forEach((a) =>
  a.addEventListener("click", closeMobileNav)
);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMobileNav();
});

/* ---------------- Scroll progress + back to top ---------------- */
const progressBar = document.getElementById("scroll-progress");
const backToTop = document.querySelector(".back-to-top");
const backToTopCircle = backToTop?.querySelector("circle");
const CIRC = backToTopCircle ? 2 * Math.PI * backToTopCircle.r.baseVal.value : 0;

function onScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? scrollTop / docHeight : 0;
  if (progressBar) progressBar.style.width = pct * 100 + "%";
  if (backToTopCircle) backToTopCircle.style.strokeDashoffset = String(CIRC * (1 - pct));
  backToTop?.classList.toggle("is-visible", scrollTop > window.innerHeight * 0.6);
}
window.addEventListener("scroll", onScrollProgress, { passive: true });
onScrollProgress();

backToTop?.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToTarget(0);
});

/* ---------------- Magnetic buttons ---------------- */
if (hasFinePointer && gsap && !prefersReduced) {
  document.querySelectorAll(".magnetic").forEach((el) => {
    const strength = 22;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      gsap.to(el, {
        x: (x / r.width) * strength,
        y: (y / r.height) * strength,
        duration: 0.4,
        ease: "power3.out",
      });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    });
  });
}

/* ---------------- Bento card spotlight ---------------- */
document.querySelectorAll(".bento-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - r.left + "px");
    card.style.setProperty("--my", e.clientY - r.top + "px");
  });
});

/* ---------------- Scroll reveals ---------------- */
if (gsap && ScrollTrigger) {
  gsap.set(".reveal", { opacity: 0, y: 28 });
  ScrollTrigger.batch(".reveal", {
    start: "top 87%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
      }),
  });
}

/* ---------------- Animated counters ---------------- */
if (gsap && ScrollTrigger) {
  document.querySelectorAll("[data-count-to]").forEach((el) => {
    const target = parseFloat(el.getAttribute("data-count-to"));
    const proxy = { val: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () =>
        gsap.to(proxy, {
          val: target,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => (el.textContent = Math.floor(proxy.val)),
        }),
    });
  });
} else {
  document.querySelectorAll("[data-count-to]").forEach((el) => {
    el.textContent = el.getAttribute("data-count-to");
  });
}

/* ---------------- FAQ accordion ---------------- */
document.querySelectorAll(".faq-item").forEach((item) => {
  const q = item.querySelector(".faq-q");
  const answer = item.querySelector(".faq-answer");
  const inner = item.querySelector(".faq-answer-inner");
  q?.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");
    document.querySelectorAll(".faq-item.is-open").forEach((openItem) => {
      if (openItem !== item) toggleFaq(openItem, false);
    });
    toggleFaq(item, !isOpen);
  });
});

function toggleFaq(item, open) {
  const answer = item.querySelector(".faq-answer");
  const inner = item.querySelector(".faq-answer-inner");
  if (!answer || !inner) return;
  item.classList.toggle("is-open", open);
  const h = inner.getBoundingClientRect().height;
  if (gsap) {
    gsap.to(answer, { height: open ? h : 0, duration: 0.5, ease: "power2.inOut" });
  } else {
    answer.style.height = open ? h + "px" : "0px";
  }
}

// open the first FAQ by default
const firstFaq = document.querySelector(".faq-item");
if (firstFaq) {
  requestAnimationFrame(() => toggleFaq(firstFaq, true));
}

/* ---------------- Concept lightbox ---------------- */
const conceptModal = document.getElementById("conceptModal");
if (conceptModal) {
  const modalImg = document.getElementById("conceptModalImg");
  const modalEyebrow = document.getElementById("conceptModalEyebrow");
  const modalTitle = document.getElementById("conceptModalTitle");
  const modalDesc = document.getElementById("conceptModalDesc");
  const modalWa = document.getElementById("conceptModalWa");
  const modalUrl = document.getElementById("conceptModalUrl");
  const modalContact = document.getElementById("conceptModalContact");
  let lastFocused = null;

  function openConceptModal(card) {
    modalImg.src = card.dataset.conceptImg || "";
    modalImg.alt = card.dataset.conceptTitle || "";
    modalEyebrow.innerHTML = card.dataset.conceptEyebrow || "";
    modalTitle.textContent = card.dataset.conceptTitle || "";
    modalDesc.textContent = card.dataset.conceptDesc || "";
    modalWa.href = `https://wa.me/37496999002?text=${card.dataset.conceptWa || ""}`;
    if (card.dataset.conceptUrl) {
      modalUrl.href = card.dataset.conceptUrl;
      modalUrl.hidden = false;
      modalWa.classList.replace("btn-primary", "btn-ghost");
    } else {
      modalUrl.hidden = true;
      modalWa.classList.replace("btn-ghost", "btn-primary");
    }
    lastFocused = document.activeElement;
    conceptModal.hidden = false;
    document.body.classList.add("concept-modal-open");
    conceptModal.querySelector(".concept-modal-close")?.focus();
  }

  function closeConceptModal() {
    conceptModal.hidden = true;
    document.body.classList.remove("concept-modal-open");
    lastFocused?.focus();
  }

  document.querySelectorAll(".concept-card").forEach((card) => {
    card.addEventListener("click", () => openConceptModal(card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openConceptModal(card);
      }
    });
  });

  conceptModal.querySelectorAll("[data-concept-close]").forEach((el) =>
    el.addEventListener("click", closeConceptModal)
  );
  modalContact?.addEventListener("click", closeConceptModal);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !conceptModal.hidden) closeConceptModal();
  });
}

/* ---------------- Contact form ---------------- */
// Email delivery: https://web3forms.com — free, no backend required. Sign up with
// your inbox email, drop the access key it emails you into the hidden
// "access_key" field on every <form id="ajax-contact"> (index.html and
// website-development.html).
//
// Optional instant Telegram notification: message @BotFather on Telegram,
// run /newbot to get a bot token, then message your new bot once and visit
// https://api.telegram.org/bot<token>/getUpdates to read back the chat id.
// Fill both in below. Leave either blank to skip that channel.
const CONTACT_CONFIG = {
  telegramBotToken: "",
  telegramChatId: "",
};

function notifyTelegram(formData) {
  const { telegramBotToken, telegramChatId } = CONTACT_CONFIG;
  if (!telegramBotToken || !telegramChatId) return Promise.resolve();
  const text = [
    "New website enquiry",
    "",
    `Name: ${formData.get("name") || "-"}`,
    `Email: ${formData.get("email") || "-"}`,
    `Subject: ${formData.get("subject") || "-"}`,
    "",
    formData.get("message") || "",
  ].join("\n");
  return fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: telegramChatId, text }),
  }).catch(() => {});
}

const contactForm = document.getElementById("ajax-contact");
const formStatus = document.getElementById("form-status");
contactForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  submitBtn?.setAttribute("disabled", "true");
  if (formStatus) {
    formStatus.textContent = "Sending your message…";
    formStatus.className = "form-status";
  }
  const formData = new FormData(contactForm);
  try {
    const [res] = await Promise.all([
      fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      }),
      notifyTelegram(formData),
    ]);
    if (!res.ok) throw new Error("Request failed");
    if (formStatus) {
      formStatus.textContent = "Thank you — your message has been sent. We'll get back to you shortly.";
      formStatus.className = "form-status ok";
    }
    contactForm.reset();
  } catch (err) {
    if (formStatus) {
      formStatus.textContent = "Something went wrong sending your message. Please email us directly at support@developersbloom.com.";
      formStatus.className = "form-status err";
    }
  } finally {
    submitBtn?.removeAttribute("disabled");
  }
});
