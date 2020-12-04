import { Box, Heading, Text } from "@chakra-ui/react";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { useGetDailyData } from "hooks";
import { ChartOptions } from "./chartOptions";

export default function DailyChart({ dailySummary }) {
  const { data, error, loading } = useGetDailyData(dailySummary);

  const state = {
    options: {
      ...ChartOptions,
      xaxis: {
        type: "datetime",
        categories: data?.map(({ date }) => date),
      },
    },
    series: [
      {
        name: "Confirmed",
        type: "column",
        data: data?.map(({ confirmed }) => confirmed),
      },
      {
        name: "Deaths",
        type: "column",
        data: data?.map(({ deaths }) => deaths),
      },
    ],
  };

  return (
    <Box
      w="full"
      shadow="sm"
      rounded="md"
      bg="white"
      flex={{ md: 3 }}
      mr={2}
      p={4}
    >
      <Heading size="md">Daily Chart</Heading>

      <Box py={4}>
        {data && (
          <Chart options={state.options} series={state.series} height={350} />
        )}
      </Box>
    </Box>
  );
}
