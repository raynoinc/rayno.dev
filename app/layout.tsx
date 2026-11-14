import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

/**
 * IRANYekanX Font - The only font for the entire project
 * Replaces Figma's Vazirmatn and Inter fonts
 */
const iranYekanX = localFont({
  src: "./fonts/IRANYekanX.woff2",
  variable: "--font-iranyekanx",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "رینو - سیستم جامع مدیریت مالی تیم‌های فناوری",
  description:
    "رینو ابزاری ساده و قدرتمند برای کنترل هزینه‌های تیم فنی شما. با رینو، تمام اشتراک‌ها، لایسنس‌ها و هزینه‌های ابری را در یک پلتفرم مدیریت کنید.",
  keywords:
    "رینو، مدیریت مالی، هزینه ابری، اشتراک، لایسنس، تیم فناوری، SaaS",
  authors: [{ name: "Rayno" }],
  creator: "Rayno",
  publisher: "Rayno",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL("https://rayno.io"), // TODO: Update with actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "رینو - سیستم جامع مدیریت مالی تیم‌های فناوری",
    description:
      "مدیریت هزینه‌های فنی را ساده کنید. رینو به تیم‌های فناوری کمک می‌کند تمام اشتراک‌ها و هزینه‌های ابری را در یک پلتفرم یکپارچه مدیریت کنند.",
    url: "https://rayno.io",
    siteName: "Rayno",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "رینو - سیستم جامع مدیریت مالی تیم‌های فناوری",
    description:
      "مدیریت هزینه‌های فنی را ساده کنید. رینو به تیم‌های فناوری کمک می‌کند تمام اشتراک‌ها و هزینه‌های ابری را در یک پلتفرم یکپارچه مدیریت کنند.",
    creator: "@rayno",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
