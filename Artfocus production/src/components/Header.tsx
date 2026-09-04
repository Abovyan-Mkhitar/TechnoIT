"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-espresso/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#"
          className="font-display text-xl tracking-[0.15em] text-ivory sm:text-2xl"
        >
          ARTFOCUS
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-ivory/80 transition-colors hover:text-gold cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="https://www.instagram.com/artfocus_production/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Artfocus Production on Instagram"
            className="text-ivory/80 transition-colors hover:text-gold cursor-pointer"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href="tel:+37498868666"
            className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-2 text-sm tracking-wide text-gold transition-colors duration-200 hover:bg-gold hover:text-espresso cursor-pointer"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            Book Your Date
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-ivory md:hidden cursor-pointer"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-espresso px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-ivory/90 hover:text-gold cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+37498868666"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-gold/60 px-5 py-2 text-sm text-gold cursor-pointer"
            >
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              Book Your Date
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
