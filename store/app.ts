import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { produce } from "immer";

interface AppStoreState {
  error: string;
  setError: (error: string) => void;
  joke: string;
  setJoke: (joke: string) => void;
}

export const useAppStore = create<AppStoreState>()(
  devtools(
    (set) => ({
      error: "",
      setError: (error: string) => {
        set(
          produce((draft: AppStoreState) => {
            draft.error = error;
          }),
          false,
          "setError"
        );
      },
      joke: "",
      setJoke: (joke: string) => {
        set(
          produce((draft: AppStoreState) => {
            draft.joke = joke;
          }),
          false,
          "setJoke"
        );
      },
    }),
    { enabled: process.env.NODE_ENV === "development" }
  )
);
