import { ROUTES } from "@/lib/constants";
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

      <nav className="flex gap-4">
        <ul>
          <Link className="text-[#1E1E1E]" href={ROUTES.ABOUT}>
            About
          </Link>
        </ul>
        <ul>
          <Link className="text-[#1E1E1E]" href={ROUTES.DQS_EXPLAINED}>
            DQS Explained
          </Link>
        </ul>
      </nav>
    </header>
  );
};
