import { Play } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-espresso">
      {/* Warm cinematic backdrop — placeholder for a real hero photo/video still */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, rgba(201,166,107,0.35), transparent 60%), radial-gradient(50% 45% at 15% 85%, rgba(140,106,86,0.4), transparent 60%), linear-gradient(160deg, #2b2622 0%, #1f1b18 55%, #2b2622 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6 pt-32 pb-24 sm:px-8">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs tracking-[0.2em] text-gold uppercase">
          Wedding Photo &amp; Video Studio
        </span>

        <h1 className="max-w-3xl font-display text-4xl leading-[1.1] text-ivory sm:text-6xl">
          Celebrate every best moment of your life with Artfocus
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
          Cinematic wedding photography and film, crafted one couple at a
          time — for weddings across Armenia, the United States, and Europe.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:+37498868666"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-espresso transition-transform duration-200 hover:scale-[1.03] cursor-pointer"
          >
            Book Your Date
          </a>
          <a
            href="https://www.instagram.com/artfocus_production/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/30 px-8 py-3.5 text-sm tracking-wide text-ivory transition-colors duration-200 hover:border-gold hover:text-gold cursor-pointer"
          >
            <Play className="h-4 w-4" strokeWidth={1.75} />
            Watch Our Films
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-ivory/60">
          <Stat value="1,142+" label="Moments captured" />
          <Stat value="62K+" label="Instagram community" />
          <Stat value="US · AM · EU" label="Weddings across 3 regions" />
        </div>

        <a
          href="https://www.instagram.com/artfocus_production/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 text-sm text-ivory/50 transition-colors hover:text-gold cursor-pointer"
        >
          <InstagramIcon className="h-4 w-4" />
          @artfocus_production
        </a>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-xl text-ivory sm:text-2xl">
        {value}
      </span>
      <span className="text-xs tracking-wide text-ivory/50">{label}</span>
    </div>
  );
}
