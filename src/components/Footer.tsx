"use client";

import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const containerClasses = isHome
    ? "flex items-center justify-center h-24"
    : "flex items-center justify-center h-24 bg-[var(--color-footer-background)] border-t border-[var(--color-footer-border)]";

  const textClasses = isHome
    ? "text-sm text-neutral-700"
    : "text-sm text-[var(--color-footer-text)]";

  return (
    <footer className={containerClasses}>
      <p className={textClasses}>&copy; Expediate {new Date().getFullYear()}</p>
    </footer>
  );
};
