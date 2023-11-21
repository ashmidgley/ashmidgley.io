import useSWR from "swr";

export const useJoke = () => {
  return useSWR(
    "api/joke",
    (...args) =>
      fetch(...args)
        .then((res) => res.json())
        .then((data) => data.joke),
    {
      revalidateOnMount: false,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
    }
  );
};
