const STORIES = [
  {
    names: "S & Gh",
    href: "https://www.instagram.com/stories/highlights/18109682459475041/",
    gradient: "linear-gradient(150deg, #c9a66b, #2b2622)",
  },
  {
    names: "A & A",
    href: "https://www.instagram.com/stories/highlights/18113077175500736/",
    gradient: "linear-gradient(150deg, #8c6a56, #1f1b18)",
  },
  {
    names: "L & A",
    href: "https://www.instagram.com/stories/highlights/18432634768188535/",
    gradient: "linear-gradient(150deg, #2b2622, #c9a66b)",
  },
  {
    names: "T & A",
    href: "https://www.instagram.com/stories/highlights/17987040284899348/",
    gradient: "linear-gradient(150deg, #c9a66b, #8c6a56)",
  },
  {
    names: "V & P",
    href: "https://www.instagram.com/stories/highlights/17971773041942209/",
    gradient: "linear-gradient(150deg, #1f1b18, #8c6a56)",
  },
  {
    names: "H & K",
    href: "https://www.instagram.com/stories/highlights/18107280877563187/",
    gradient: "linear-gradient(150deg, #8c6a56, #c9a66b)",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-xs tracking-[0.2em] text-taupe uppercase">
              Portfolio
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal sm:text-4xl">
              Stories from real weddings
            </h2>
          </div>
          <a
            href="https://www.instagram.com/artfocus_production/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-taupe underline underline-offset-4 hover:text-charcoal cursor-pointer"
          >
            See all on Instagram
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {STORIES.map((story) => (
            <a
              key={story.names}
              href={story.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer"
            >
              <div
                aria-hidden
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: story.gradient }}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-lg text-ivory">
                  {story.names}
                </p>
                <p className="text-xs tracking-wide text-ivory/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View story
                </p>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-8 text-xs text-charcoal/40">
          Placeholder covers shown above — swap in real wedding photography
          before launch. Cards link through to the corresponding highlight on
          Instagram.
        </p>
      </div>
    </section>
  );
}
