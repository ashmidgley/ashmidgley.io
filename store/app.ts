import { create } from "zustand";
import { produce } from "immer";

interface AppStoreState {
  error: string;
  setError: (error: string) => void;
  joke: string;
  setJoke: (joke: string) => void;
}

export const useAppStore = create<AppStoreState>((set) => ({
  error: "",
  setError: (error: string) => {
    set(
      produce((draft: AppStoreState) => {
        draft.error = error;
      })
    );
  },
  joke: "",
  setJoke: (joke: string) => {
    set(
      produce((draft: AppStoreState) => {
        draft.joke = joke;
      })
    );
  },
}));
