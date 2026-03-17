"use client";

import "@/styles/globals.css";

import { QueryProvider } from "@/providers/QueryProvider";
import { ErrorBoundary, Header } from "@/components";
import { inter, breeSerif } from "@/lib/fonts";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <head>
      <title>Expediate</title>
      <meta name="description" content="Simple food tracking for athletes" />

      {/* Favicons & app icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#FFF3D9" />
    </head>

    <body
      className={`${inter.variable} ${breeSerif.variable} font-sans antialiased`}
    >
      <Header />

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
