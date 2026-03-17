import { ROUTES } from "@/lib/constants";
import { ExternalLinkIcon } from "./icons";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white p-6 flex justify-between items-center">
      <Link
        className="font-serif text-text-strong text-xl mb-[1px] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 rounded active:scale-95"
        href={ROUTES.HOME}
      >
        Expedi
        <span className="text-brand-primary/60">ate</span>
      </Link>

      <nav>
        <ul className="flex gap-6">
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
};
