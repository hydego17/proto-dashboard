import Head from "next/head";
import { Box, Divider, Heading, Spinner, Text, Wrap } from "@chakra-ui/react";

import { useGlobalData } from "hooks/Global";

import SummaryCard from "components/Card/SummaryCard";
import DailyChart from "components/Card/DailyChart";

export default function Home() {
  // Fetch data from API using SWR custom Hook

  const { data, error, loading } = useGlobalData();

  return (
    <>
      <Head>
        <title> Global </title>
      </Head>

      {/* Global */}

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
