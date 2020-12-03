import { Box, Flex, Heading, Text, Spinner, Wrap } from "@chakra-ui/react";

import { useGetData } from "hooks";
import SummaryCard from "components/SummaryCard";

export default function Home() {
  const { data, error, loading } = useGetData();

  return (
    <>
      <Heading size="md" size="lg" pb={4}>
        Dashboard
      </Heading>

      {loading && <Spinner />}

      {data && (
        // Summary Card

        <Wrap w="100%">
          <Box
            shadow="sm"
            rounded="md"
            bg="white"
            flex={{ md: 3 }}
            mr={2}
            p={4}
          >
            <Heading size="sm">Daily Summary</Heading>
          </Box>
          <SummaryCard {...data} />
        </Wrap>
      )}
    </>
  );
}
