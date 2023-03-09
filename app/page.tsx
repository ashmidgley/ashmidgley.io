"use client";

import { Offerings } from "../components/Offerings";
import { SelectedWorkDesktop } from "../components/SelectedWorkDesktop";
import { OtherOfferings } from "../components/OtherOfferings";
import { Testimonials } from "../components/Testimonials";
import { motion } from "framer-motion";
import { SelectedWorkMobile } from "@/components/SelectedWorkMobile";

const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      damping: 100,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
  },
};
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
