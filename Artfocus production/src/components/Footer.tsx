import { Phone } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-espresso py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <div>
          <p className="font-display text-lg tracking-[0.15em] text-ivory">
            ARTFOCUS
          </p>
          <p className="mt-1 text-xs text-ivory/40">
            Celebrate all the best moments of your life.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="tel:+37498868666"
            className="flex items-center gap-2 text-sm text-ivory/60 hover:text-gold cursor-pointer"
          >
            <Phone className="h-4 w-4" strokeWidth={1.5} />
            +374 98 868 666
          </a>
          <a
            href="https://www.instagram.com/artfocus_production/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-ivory/60 hover:text-gold cursor-pointer"
          >
            <InstagramIcon className="h-4 w-4" strokeWidth={1.5} />
            Instagram
          </a>
        </div>

        <p className="text-xs text-ivory/30">
          © {new Date().getFullYear()} Artfocus Production
        </p>
      </div>
    </footer>
  );
}
