import Head from "next/head";
import { Heading, Spinner, Wrap } from "@chakra-ui/react";

import { useGetData } from "hooks";
import SummaryCard from "components/Card/SummaryCard";
import DailyChart from "components/Card/DailyChart";

export default function Home() {
  // Fetch data from API using SWR custom Hook
  const { data, error, loading } = useGetData();

  return (
    <>
      <Head>
        <title> Dashboard </title>
      </Head>
      <Heading size="md" size="lg" px={2} pb={4}>
        Dashboard
      </Heading>

      {loading && <Spinner />}

      {/* Display data into separate components */}
      {data && (
        <Wrap w="100%">
          <DailyChart {...data} />
          <SummaryCard {...data} />
        </Wrap>
      )}
    </>
  );
}
