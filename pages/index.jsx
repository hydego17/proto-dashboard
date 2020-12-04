import { Box, Flex, Heading, Text, Spinner, Wrap } from "@chakra-ui/react";

import { useGetData } from "hooks";
import SummaryCard from "components/Card/SummaryCard";
import DailyChart from "components/Card/DailyChart";

export default function Home() {
  const { data, error, loading } = useGetData();

  return (
    <>
      <Heading size="md" size="lg" pb={4}>
        Dashboard
      </Heading>

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
