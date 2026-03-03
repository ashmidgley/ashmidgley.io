import "./globals.css";

import localFont from "next/font/local";
import { AnalyticsWrapper } from "../components/AnalyticsWrapper";
import { Metadata } from "next";
import clsx from "clsx";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const sharpGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/sharp-grotesk-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/sharp-grotesk-semibold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashmidgley.io"),
  title: {
    default: "Ash Midgley | Full-Stack Software Engineer",
    template: "%s | Ash Midgley",
  },
  description:
    "Full-stack software engineer building pragmatic web products with Next.js, React, TypeScript, and backend systems for startups and growing teams.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Ash Midgley",
    "freelance software engineer",
    "full-stack software engineer",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
  ],
  openGraph: {
    title: "Ash Midgley | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer building pragmatic web products with Next.js, React, TypeScript, and backend systems for startups and growing teams.",
    url: "/",
    siteName: "Ash Midgley",
    images: [
      {
        url: "/og.jpg",
        width: 1920,
        height: 1080,
        alt: "Ash Midgley portfolio site preview",
      },
    ],
    locale: "en_GB",
    type: "website",
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
  twitter: {
    title: "Ash Midgley | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer building pragmatic web products with Next.js, React, TypeScript, and backend systems for startups and growing teams.",
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-white bg-[#111010] scroll-smooth",
        sharpGrotesk.className
      )}
    >
      <body>
        <Nav />
        <main>
          {children}
          <AnalyticsWrapper />
        </main>
        <Footer />
      </body>
    </html>
  );
}
