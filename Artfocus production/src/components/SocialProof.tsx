import InstagramIcon from "@/components/icons/InstagramIcon";

export default function SocialProof() {
  return (
    <section className="bg-espresso py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
        <span className="text-xs tracking-[0.2em] text-gold uppercase">
          Trusted by real couples
        </span>
        <h2 className="mt-4 font-display text-3xl leading-snug text-ivory sm:text-4xl">
          Followed by 62,000+ people who love real, unscripted love stories
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/60">
          Most of our new couples find us through a highlight reel from a
          wedding we shot last season. Come see the community for yourself —
          new stories go up every week.
        </p>
        <a
          href="https://www.instagram.com/artfocus_production/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-gold/50 px-8 py-3.5 text-sm tracking-wide text-gold transition-colors duration-200 hover:bg-gold hover:text-espresso cursor-pointer"
        >
          <InstagramIcon className="h-4 w-4" />
          Follow @artfocus_production
        </a>
      </div>
    </section>
  );
}
