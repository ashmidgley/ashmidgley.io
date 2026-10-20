import { Metadata } from "next";
import { Canvas } from "@/components/lab/Canvas";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Canvas",
};

export default function CanvasPage() {
  return (
    <main>
      <Canvas />
      <Header />
    </main>
  );
}
