"use client";

import React, { FC, createContext, useEffect, useState } from "react";

export const AppContext = createContext({
  error: "",
  setError: (error: string) => {},
  joke: "",
  setJoke: (joke: string) => {},
});

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider: FC<Props> = ({ children }) => {
  const [error, setError] = useState("");
  const [joke, setJoke] = useState("");

  // Clear error after 5 seconds to remove banner.
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        if (error) {
          setError("");
        }
      }, 5000);
    }
  }, [error]);

  // Clear joke after 5 seconds to remove banner.
  useEffect(() => {
    if (joke) {
      setTimeout(() => {
        if (joke) {
          setJoke("");
        }
      }, 10000);
    }
  }, [joke]);

  return (
    <AppContext.Provider
      value={{
        error,
        setError,
        joke,
        setJoke,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
