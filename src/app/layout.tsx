import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Stavya Srinath — Robotics Engineer & Student Leader",
  description:
    "Stavya Srinath is a student robotics engineer focused on electrical systems, autonomous hardware, technical leadership, and STEM education.",
  authors: [{ name: "Stavya Srinath" }],
  creator: "Stavya Srinath",
  publisher: "Stavya Srinath",
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "9o3wrNB8jjOorDEpkY12oCN5U7Va05ZqA7xkmY0Cua8",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Stavya Srinath",
    title: "Stavya Srinath — Robotics Engineer & Student Leader",
    description:
      "Stavya Srinath is a student robotics engineer focused on electrical systems, autonomous hardware, technical leadership, and STEM education.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stavya Srinath — Robotics Engineer & Student Leader",
    description:
      "Stavya Srinath is a student robotics engineer focused on electrical systems, autonomous hardware, technical leadership, and STEM education.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f14" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Stavya Srinath",
        url: siteUrl,
        description:
          "Stavya Srinath is a student robotics engineer focused on electrical systems, autonomous hardware, technical leadership, and STEM education.",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Stavya Srinath",
        url: siteUrl,
        image: `${siteUrl}/assets/hero-photo.jpg`,
        jobTitle: "Vice President, FRC 2813 Gear Heads",
        description:
          "Student robotics engineer and electrical systems lead working on autonomous hardware, technical leadership, and STEM education.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "San Jose",
          addressRegion: "CA",
          addressCountry: "US",
        },
        worksFor: {
          "@type": "Organization",
          name: "FRC Team 2813 Gear Heads",
          url: "https://team2813.com",
        },
        sameAs: [
          "https://github.com/stavya-srinath",
          "https://linkedin.com/in/stavya-srinath",
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body id="top" className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}