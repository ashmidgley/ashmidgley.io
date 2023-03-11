"use client";

import { Offerings } from "../components/Offerings";
import { SelectedWorkDesktop } from "../components/SelectedWorkDesktop";
import { OtherOfferings } from "../components/OtherOfferings";
import { Testimonials } from "../components/Testimonials";
import { motion } from "framer-motion";
import { SelectedWorkMobile } from "@/components/SelectedWorkMobile";
import { fadeIn } from "@/utils/motion.utils";

export default function Home() {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Offerings />
      <div className="hidden sm:block">{<SelectedWorkDesktop />}</div>
      <div className="block sm:hidden">{<SelectedWorkMobile />}</div>
      <OtherOfferings />
      <Testimonials />
    </motion.div>
  );
}
