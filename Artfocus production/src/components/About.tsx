export default function About() {
  return (
    <section id="about" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs tracking-[0.2em] text-taupe uppercase">
            About Artfocus
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal sm:text-4xl">
            Real weddings, told with warmth and craft
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal/70">
            We&apos;re a photo and video studio built around one belief:
            every wedding deserves to be remembered exactly as it felt —
            unscripted, emotional, and beautiful. From the quiet moments of a
            bride&apos;s morning to the first dance, we&apos;re there to
            capture it all.
          </p>
          <p className="mt-4 text-base leading-relaxed text-charcoal/70">
            Based in Armenia and trusted by couples across the diaspora, we
            travel for weddings in the United States and Europe — bringing
            the same cinematic eye to every celebration, wherever it happens.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-charcoal/10 pt-8">
            <div>
              <p className="font-display text-2xl text-charcoal sm:text-3xl">
                1,142+
              </p>
              <p className="mt-1 text-xs tracking-wide text-charcoal/50">
                Stories delivered
              </p>
            </div>
            <div>
              <p className="font-display text-2xl text-charcoal sm:text-3xl">
                62K+
              </p>
              <p className="mt-1 text-xs tracking-wide text-charcoal/50">
                Community on Instagram
              </p>
            </div>
            <div>
              <p className="font-display text-2xl text-charcoal sm:text-3xl">
                3
              </p>
              <p className="mt-1 text-xs tracking-wide text-charcoal/50">
                Continents served
              </p>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(155deg, #c9a66b 0%, #8c6a56 45%, #2b2622 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 45%)",
            }}
          />
          <div className="absolute inset-0 flex items-end p-8">
            <p className="font-display text-xl text-ivory/95 italic">
              &ldquo;Celebrate all the best moments of your life.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
