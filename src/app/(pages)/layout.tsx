import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import Link from "next/link";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Expediate",
  description: "Simple food tracking for athletes",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body
    // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <header className="bg-white p-4 flex justify-between">
        <Link href="/">Expediate</Link>

        <nav className="flex gap-4">
          <ul>
            <Link href="/about">About</Link>
          </ul>
          <ul>
            <Link href="/dqs-explained">DQS Explained</Link>
          </ul>
        </nav>
      </header>

      {children}

      <footer className="flex items-center justify-center h-24">
        <p className="text-sm text-neutral-700">
          &copy; Expediate {new Date().getFullYear()}
        </p>
      </footer>
    </body>
  </html>
);

export default RootLayout;
