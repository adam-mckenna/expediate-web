import Link from "next/link";

import { ROUTES } from "@/lib/constants";
import { ExternalLinkIcon } from "@/components";

export const Header = () => (
  <header className="bg-white px-5 py-4 md:px-6 md:py-6 flex flex-col items-center text-center gap-3 md:flex-row md:items-center md:justify-between md:text-left">
    <Link
      className="font-serif text-text-strong text-xl mb-[1px] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 rounded active:scale-95"
      href={ROUTES.HOME}
    >
      Expedi
      <span className="text-brand-primary/60">ate</span>
    </Link>

    <nav className="w-full md:w-auto">
      <ul className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 md:gap-6">
        <li>
          <Link
            className="text-text-strong font-bold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 rounded active:scale-95"
            href={ROUTES.HOME}
          >
            Log Food
          </Link>
        </li>
        <li>
          <Link
            className="text-text-strong transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 rounded active:scale-95"
            href={ROUTES.ABOUT}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="text-text-strong transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 rounded active:scale-95"
            href={ROUTES.DQS_EXPLAINED}
          >
            DQS Explained
          </Link>
        </li>
        <li>
          <Link
            className="text-text-strong inline-flex items-center gap-2 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 rounded active:scale-95"
            href={ROUTES.ARTICLES}
            target="_blank"
          >
            <span>Articles</span>
            <ExternalLinkIcon />
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
