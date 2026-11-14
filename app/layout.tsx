import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { content } from "@/lib/content";
import "./globals.css";

/** IRANYekanX — the only font for the whole project (replaces Figma's Vazirmatn / Inter). */
const iranYekanX = localFont({
  src: "./fonts/IRANYekanX.woff2",
  variable: "--font-iranyekanx",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: content.site.title,
  description: content.site.description,
  openGraph: {
    title: content.site.title,
    description: content.site.description,
    siteName: "Rayno",
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${iranYekanX.variable} font-sans antialiased min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
