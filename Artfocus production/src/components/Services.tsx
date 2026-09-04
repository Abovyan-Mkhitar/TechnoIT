import { Camera, Clapperboard, Sparkles } from "lucide-react";

const SERVICES = [
  {
    icon: Camera,
    title: "Photography",
    description:
      "Full-day coverage of your ceremony and reception, delivered as a curated, cinematic gallery.",
  },
  {
    icon: Clapperboard,
    title: "Videography",
    description:
      "A cinematic wedding film with sound — from the first look to the last dance, cut like a story.",
  },
  {
    icon: Sparkles,
    title: "Full Story",
    description:
      "Photo and video together, one crew, one vision — our most-booked package for full-day weddings.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-espresso py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="max-w-xl">
          <span className="text-xs tracking-[0.2em] text-gold uppercase">
            Services
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ivory sm:text-4xl">
            Choose how you want your day remembered
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-ivory/10 bg-ivory/[0.03] p-8 transition-colors duration-200 hover:border-gold/40"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display text-xl text-ivory">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/60">
                {description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-ivory/50">
          Packages and pricing are tailored to your date and location —{" "}
          <a
            href="tel:+37498868666"
            className="text-gold underline underline-offset-4 hover:text-ivory cursor-pointer"
          >
            call +374 98 868666
          </a>{" "}
          for availability.
        </p>
      </div>
    </section>
  );
}
