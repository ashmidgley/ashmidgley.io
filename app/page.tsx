"use client";

import { Banner } from "@/components/Banner";
import { SelectedWork } from "@/components/SelectedWork";
import { AppContext } from "@/contexts/AppContext";
import { useContext } from "react";
import { Offerings } from "../components/Offerings";
import { OtherOfferings } from "../components/OtherOfferings";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  const { error, joke } = useContext(AppContext);

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
