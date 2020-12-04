import useSWR from "swr";

export const useIndonesiaData = () => {
  const { data, error } = useSWR(
    `https://apicovid19indonesia-v2.vercel.app/api/indonesia/more`,
    fetcher
  );
  return {
    indoData: data,
    error,
    loading: !data && !error,
  };
};

export const useProvinsiData = () => {
  const { data, error } = useSWR(
    `https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi`,
    fetcher
  );
  return {
    provinsiData: data,
    error,
    loading: !data && !error,
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
