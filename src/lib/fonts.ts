import { Inter, Bree_Serif } from "next/font/google";

/**
 * Font configuration for the application
 * 
 * These fonts are optimized by Next.js and can be used via CSS variables
 * or Tailwind classes throughout the app.
 */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const breeSerif = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bree-serif",
  display: "swap",
});
