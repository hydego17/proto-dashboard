import { Box, Heading, Text } from "@chakra-ui/react";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { useGetDailyData } from "hooks/Global";
import { chartOptions } from "./chartOptions";

export default function DailyChart({ dailySummary }) {
  const { data, error, loading } = useGetDailyData(dailySummary);

  const chart = chartOptions(data);

  return (
    <Box
      w="full"
      shadow="sm"
      rounded="md"
      bg="white"
      flex={{ md: 3 }}
      m={2}
      p={4}
    >
      <Box as="header" textAlign="center">
        <Heading size="md">Daily Chart</Heading>
        <Text as="small"> (Last 30 Days ) </Text>
      </Box>

      <Box py={4}>
        {data && (
          <Chart options={chart.options} series={chart.series} height={360} />
        )}
      </Box>
    </Box>
  );
}
