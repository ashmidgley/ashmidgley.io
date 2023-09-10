import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export const useJoke = () => {
  return useSWR("api/joke", fetcher, {
    revalidateOnMount: false,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: false,
  });
};
