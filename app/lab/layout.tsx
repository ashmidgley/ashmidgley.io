import { Metadata } from "next";
import { ExitLink } from "@/components/lab/ExitLink";

// Hidden modes launched from terminal easter eggs: reachable by URL, kept out
// of search results.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ExitLink />
    </>
  );
}
