"use client";

import styles from "./page.module.css";

import { motion } from "framer-motion";
import { Nav } from "./components/Nav";
import { Offerings } from "./components/Offerings";
import { SelectedWork } from "./components/SelectedWork";
import { OtherOfferings } from "./components/OtherOfferings";
import { Testimonials } from "./components/Testimonials";

const dropIn = {
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
    <motion.main
      className={styles.main}
      variants={dropIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Nav />
      <Offerings />
      <SelectedWork />
      <OtherOfferings />
      <Testimonials />
    </motion.main>
  );
}
