import { Fredoka, Inter } from "next/font/google";

// Inter is default font, Bricolage is for emphasis

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  adjustFontFallback: false,
});

export const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka",
  adjustFontFallback: false,
});
