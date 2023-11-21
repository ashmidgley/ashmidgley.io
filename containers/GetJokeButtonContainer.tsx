"use client";

import { useJoke } from "@/hooks/useJoke";
import { useAppStore } from "@/store/app";
import React, { useEffect } from "react";
import { GetJokeButton } from "../components/GetJokeButton";

export const GetJokeContainer = () => {
  const { data: joke, isLoading, error: isError, mutate } = useJoke();
  const { setJoke, error, setError } = useAppStore();

  useEffect(() => {
    if (joke) {
      setJoke(`${joke.setup} ... ${joke.punchline}`);
      setTimeout(() => {
        setJoke("");
      }, 5000);
    }
  }, [joke]);

  useEffect(() => {
    if (!error && isError) {
      setError("Failed to load joke...");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }, [isError]);

  if (error) return <div>{error}</div>;

  if (isLoading) return <div>Is loading...</div>;

  return <GetJokeButton onGetJoke={mutate} />;
};
