import { ROUTES } from "@/lib/constants";
import { ExternalLinkIcon } from "./icons";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white p-6 flex justify-between items-center">
      <Link
        className="font-serif text-[#1E1E1E] text-xl mb-[1px]"
        href={ROUTES.HOME}
      >
        Expedi<span className="text-[#BF6A02]/60">ate</span>
      </Link>

      <nav >
        <ul className="flex gap-6">
        <li>
          <Link className="text-[#1E1E1E] font-bold" href={ROUTES.HOME}>
            Log Food
          </Link>
        </li>
        <li>
          <Link className="text-[#1E1E1E]" href={ROUTES.ABOUT}>
            About
          </Link>
        </li>
        <li>
          <Link className="text-[#1E1E1E]" href={ROUTES.DQS_EXPLAINED}>
            DQS Explained
          </Link>
        </li>
        <li>
          <Link className="text-[#1E1E1E] inline-flex items-center gap-2" href={ROUTES.ARTICLES} target="_blank">
            <span>Articles</span>
            <ExternalLinkIcon />
          </Link>
        </li>
        </ul>
      </nav>
    </header>
  );
};
