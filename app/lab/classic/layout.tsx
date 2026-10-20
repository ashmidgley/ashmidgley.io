import { Background } from "@/components/Background";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

// The original single-scroll homepage, parked here since the terminal took over `/`.
export default function ClassicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Background />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
