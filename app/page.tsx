"use client";

import { Offerings } from "../components/Offerings";
import { SelectedWork } from "../components/SelectedWork";
import { OtherOfferings } from "../components/OtherOfferings";
import { Testimonials } from "../components/Testimonials";
import { motion } from "framer-motion";

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
      <SelectedWork />
      <OtherOfferings />
      <Testimonials />
    </motion.div>
  );
}
