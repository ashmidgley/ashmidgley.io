import { Metadata } from "next";
import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { Story } from "@/components/lab/Story";

export const metadata: Metadata = {
  title: "Story",
};

export default function StoryPage() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <Story />
      </main>
    </>
  );
}
