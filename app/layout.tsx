import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "PT. Lintas Prima Perkasa | Maritime Services & Tugboat Solutions",
  description:
    "Professional maritime services offering tugboat solutions, vessel management, and environmental stewardship in Indonesian waters. Reliable partner for marine logistics and transportation.",
  keywords:
    "tugboat services, maritime solutions, vessel management, marine logistics, Indonesia shipping, environmental maritime practices",
  openGraph: {
    title: "PT. Lintas Prima Perkasa | Maritime Services",
    description:
      "Professional tugboat and maritime services across Indonesian waters",
    type: "website",
    locale: "en_US",
    siteName: "PT. Lintas Prima Perkasa",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT. Lintas Prima Perkasa | Maritime Services",
    description:
      "Professional tugboat and maritime services across Indonesian waters",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.className}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
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
