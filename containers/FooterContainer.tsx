"use client";

import React from "react";
import { Footer } from "@/components/Footer";

export const FooterContainer = () => {
  async function handleGetJoke() {
    const response = await fetch("/api/joke");
    const joke = await response.json();
    alert(`${joke.setup}\n\n...\n\n${joke.punchline}`);
  }

  return <Footer onGetJoke={handleGetJoke} />;
};
