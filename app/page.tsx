"use client";

import { SelectedWork } from "@/components/SelectedWork";
import { Offerings } from "../components/Offerings";
import { OtherOfferings } from "../components/OtherOfferings";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Offerings />
      <SelectedWork />
      <OtherOfferings />
      <Testimonials />
    </>
  );
}
