"use client";

import { AppContext } from "@/contexts/AppContext";
import { fetcher } from "@/utils/fetcher";
import React, { useContext } from "react";
import useSWR from "swr";
import { GetJokeButton } from "../components/GetJokeButton";

export const GetJokeContainer = () => {
  const { data: joke, error, isLoading, mutate } = useSWR("api/joke", fetcher);
  const { setJoke, setError } = useContext(AppContext);

  const handleGetJoke = () => {
    setJoke(`${joke.setup} ... ${joke.punchline}`);
    mutate();
  };

  if (error) {
    setError("Failed to load joke...");
    return <div>Failed to load...</div>;
  }

  if (isLoading) return <div>Is loading...</div>;

  return <GetJokeButton onGetJoke={handleGetJoke} />;
};
