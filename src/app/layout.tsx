import "@/styles/globals.css";

import { QueryProvider } from "@/providers/QueryProvider";
import { ErrorBoundary, Header, Footer } from "@/components";
import { inter, breeSerif } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Expediate",
    template: "%s | Expediate",
  },
  description: "Simple food tracking for athletes",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  themeColor: "oklch(var(--color-brand-primary-soft))",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body
      className={`${inter.variable} ${breeSerif.variable} font-sans antialiased`}
    >
      <Header />

      <ErrorBoundary>
        <QueryProvider>{children}</QueryProvider>
      </ErrorBoundary>

      <Footer />
    </body>
  </html>
);

export default RootLayout;
