import Head from "next/head";
import { Spinner, Wrap } from "@chakra-ui/react";

import { useGlobalData } from "hooks/Global";

import SummaryCard from "components/Card/SummaryCard";
import DailyChart from "components/Card/DailyChart";

export default function Home() {
  // Fetch data from API using SWR custom Hook

  const { data, loading } = useGlobalData();

  return (
    <>
      <Head>
        <title> Global </title>
      </Head>

      {loading && <Spinner />}

      {data && (
        <Wrap w="100%">
          <DailyChart {...data} />
          <SummaryCard {...data} />
        </Wrap>
      )}
    </>
  );
}
