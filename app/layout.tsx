import "./globals.css";

import localFont from "next/font/local";
import { AnalyticsWrapper } from "../components/AnalyticsWrapper";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { MotionProvider } from "@/components/MotionProvider";

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
    default: "Ash Midgley | Software Engineer",
    template: "%s | Ash Midgley",
  },
  description:
    "Software engineer building pragmatic web products with Next.js, React, TypeScript, and backend systems for startups and growing teams.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Ash Midgley",
    "freelance software engineer",
    "software engineer",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
  ],
  openGraph: {
    title: "Ash Midgley | Software Engineer",
    description:
      "Software engineer building pragmatic web products with Next.js, React, TypeScript, and backend systems for startups and growing teams.",
    url: "/",
    siteName: "Ash Midgley",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
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
    title: "Ash Midgley | Software Engineer",
    description:
      "Software engineer building pragmatic web products with Next.js, React, TypeScript, and backend systems for startups and growing teams.",
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#111010",
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
        <MotionProvider>{children}</MotionProvider>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
