import { Phone, MapPin } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-2">
        <div>
          <span className="text-xs tracking-[0.2em] text-taupe uppercase">
            Contact
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal sm:text-4xl">
            Let&apos;s talk about your date
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70">
            Tell us your wedding date and location and we&apos;ll get back to
            you with availability and package details.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            <a
              href="tel:+37498868666"
              className="flex items-center gap-4 text-charcoal transition-colors hover:text-taupe cursor-pointer"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal/5">
                <Phone className="h-4.5 w-4.5" strokeWidth={1.5} />
              </span>
              <span className="text-base">+374 98 868 666</span>
            </a>
            <a
              href="https://www.instagram.com/artfocus_production/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-charcoal transition-colors hover:text-taupe cursor-pointer"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal/5">
                <InstagramIcon className="h-4.5 w-4.5" strokeWidth={1.5} />
              </span>
              <span className="text-base">@artfocus_production</span>
            </a>
            <div className="flex items-center gap-4 text-charcoal">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal/5">
                <MapPin className="h-4.5 w-4.5" strokeWidth={1.5} />
              </span>
              <span className="text-base">
                Based in Armenia — available for weddings in the US &amp;
                Europe
              </span>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-5 rounded-2xl border border-charcoal/10 bg-white/60 p-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Your name" name="name" placeholder="Anahit & Davit" />
            <Field
              label="Wedding date"
              name="date"
              type="date"
              placeholder=""
            />
          </div>
          <Field
            label="Phone or email"
            name="contact"
            placeholder="+374 ... or you@email.com"
          />
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-xs tracking-wide text-charcoal/60"
            >
              Tell us about your day
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Venue, city, guest count — anything that helps us plan."
              className="w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/35 focus:border-gold focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-charcoal px-8 py-3.5 text-sm font-medium tracking-wide text-ivory transition-colors duration-200 hover:bg-gold hover:text-espresso cursor-pointer"
          >
            Send Inquiry
          </button>
          <p className="text-xs text-charcoal/40">
            This form is a UI placeholder — connect it to an email service
            (e.g. Formspree, Resend) before launch.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs tracking-wide text-charcoal/60"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/35 focus:border-gold focus:outline-none"
      />
    </div>
  );
}
