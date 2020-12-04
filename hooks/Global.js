import useSWR from "swr";

const URL = `https://covid19.mathdro.id/api/`;

export const useGlobalData = () => {
  const { data, error } = useSWR(`${URL}`, fetcher);
  return {
    data,
    error,
    loading: !error && !data,
  };
};

// this hook receive (dailySummary) url as props
export const useGetDailyData = (url) => {
  const { data, error } = useSWR(`${url}`, fetcher);
  return {
    data: data?.slice(-30).map((daily) => ({
      confirmed: daily.confirmed.total,
      deaths: daily.deaths.total,
      date: daily.reportDate,
    })),
    error,
    loading: !error && !data,
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
