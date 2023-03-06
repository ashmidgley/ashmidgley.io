import "./globals.css";

import localFont from "@next/font/local";
import { AnalyticsWrapper } from "./components/Analytics";

const sharpGrotesk = localFont({
  src: [
    {
      path: "./fonts/sharp-grotesk-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sharp-grotesk-semibold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sharpGrotesk.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
