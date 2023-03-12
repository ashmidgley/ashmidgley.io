import { Offerings } from "../components/Offerings";
import { SelectedWorkDesktop } from "../components/SelectedWorkDesktop";
import { OtherOfferings } from "../components/OtherOfferings";
import { Testimonials } from "../components/Testimonials";
import { SelectedWorkMobile } from "@/components/SelectedWorkMobile";

export default function Home() {
  return (
    <>
      <Offerings />
      <div className="hidden sm:block">{<SelectedWorkDesktop />}</div>
      <div className="block sm:hidden">{<SelectedWorkMobile />}</div>
      <OtherOfferings />
      <Testimonials />
    </>
  );
}
