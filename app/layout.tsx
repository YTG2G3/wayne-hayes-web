import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fredoka, inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Wayne Hayes Web Challenge",
  description: "Built by Henry Kwon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", inter.variable, fredoka.variable)}>
        {children}
      </body>
    </html>
  );
}
