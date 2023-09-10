"use client";

import { Banner } from "@/components/Banner";
import { SelectedWork } from "@/components/SelectedWork";
import { useAppStore } from "@/store/app";
import { Offerings } from "../components/Offerings";
import { OtherOfferings } from "../components/OtherOfferings";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  const { error, joke } = useAppStore();

  return (
    <>
      {error && <Banner type="error" message={error} />}
      {joke && <Banner type="info" message={joke} />}
      <Offerings />
      <SelectedWork />
      <OtherOfferings />
      <Testimonials />
    </>
  );
}
