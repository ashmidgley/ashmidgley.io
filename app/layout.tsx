import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import localFont from "@next/font/local";
import { AnalyticsWrapper } from "../components/AnalyticsWrapper";
import { Metadata } from "next";
import clsx from "clsx";
import { Nav } from "@/components/Nav";

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
  title: {
    default: "Ash Midgley | Freelance Software Engineer",
    template: "%s | Ash Midgley",
  },
  description:
    "Need an extra pair of hands on an existing project? Let's talk...",
  openGraph: {
    title: "Ash Midgley | Freelance Software Engineer",
    description:
      "Need an extra pair of hands on an existing project? Let's talk...",
    url: "https://ashmidgley.io",
    siteName: "Ash Midgley",
    images: [
      {
        url: "https://ashmidgley.io/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-NZ",
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
    title: "Ash Midgley | Freelance Software Engineer",
    card: "summary_large_image",
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
      className={clsx("text-white bg-[#111010]", sharpGrotesk.className)}
    >
      <body>
        <Nav />
        <main>
          {children}
          <AnalyticsWrapper />
        </main>
      </body>
    </html>
  );
}
