import useSWR from "swr";

export const useGetPosts = () => {
  const { data, error } = useSWR(`${url}`, fetcher);
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};
