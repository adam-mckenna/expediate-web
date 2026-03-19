"use client";

import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const classes = `flex items-center justify-center h-24 ${!isHome && "bg-[var(--color-surface-dark-background)] border-t border-[var(--color-surface-dark-border)]"}`;
  const textClasses = `text-sm ${!isHome ? "text-neutral-700" : "text-[var(--color-surface-dark)]"}`;

  return (
    <footer className={classes}>
      <p className={textClasses}>&copy; Expediate {new Date().getFullYear()}</p>
    </footer>
  );
};
