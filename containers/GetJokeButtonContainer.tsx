"use client";

import { useAppStore } from "@/store/app";
import { fetcher } from "@/utils/fetcher";
import React from "react";
import useSWR from "swr";
import { GetJokeButton } from "../components/GetJokeButton";

export const GetJokeContainer = () => {
  const { data: joke, error, isLoading, mutate } = useSWR("api/joke", fetcher);
  const { setJoke, setError } = useAppStore();

  const handleGetJoke = () => {
    setJoke(`${joke.setup} ... ${joke.punchline}`);
    setTimeout(() => {
      setJoke("");
    }, 10000);
    mutate();
  };

  if (error) {
    setError("Failed to load joke...");
    setTimeout(() => {
      setError("");
    }, 5000);
    return <div>Failed to load...</div>;
  }

  if (isLoading) return <div>Is loading...</div>;

  return <GetJokeButton onGetJoke={handleGetJoke} />;
};
