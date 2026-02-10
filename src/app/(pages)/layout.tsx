"use client";

import Link from "next/link";
import { Inter, Bree_Serif } from "next/font/google";

import "./../globals.css";

import { QueryProvider } from "@/providers/QueryProvider";
import { ErrorBoundary } from "@/components";
import { ROUTES } from "@/lib/constants";

const breeSerif = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <head>
      <title>Expediate</title>
      <meta name="description" content="Simple food tracking for athletes" />
    </head>

    <body className={`${breeSerif.className} ${inter.className} antialiased`}>
      <header className="bg-white p-6 flex justify-between items-center">
        <Link
          className={`${breeSerif.className} text-[#1E1E1E] text-xl mb-[1px]`}
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

      <ErrorBoundary>
        <QueryProvider>{children}</QueryProvider>
      </ErrorBoundary>

      <footer className="flex items-center justify-center h-24">
        <p className="text-sm text-neutral-700">
          &copy; Expediate {new Date().getFullYear()}
        </p>
      </footer>
    </body>
  </html>
);

export default RootLayout;
