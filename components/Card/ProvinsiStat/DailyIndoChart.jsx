import { Box, Spinner } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { useDailyIndoData } from "hooks/Indonesia";

export default function DailyIndoChart() {
  const { harianData, loading } = useDailyIndoData();

  const chart = chartOptions(harianData);

  return (
    <Box py={4}>
      {loading && <Spinner />}

      {harianData && (
        <Chart options={chart.options} series={chart.series} type="line" />
      )}
    </Box>
  );
}

const chartOptions = (harianData) => {
  return {
    series: [
      {
        name: "Meniggal",
        type: "column",
        data: harianData?.map((daily) => daily.meninggal),
      },
      {
        name: "Sembuh",
        type: "area",
        data: harianData?.map((daily) => daily.sembuh),
      },
      {
        name: "Dirawat",
        type: "line",
        data: harianData?.map((daily) => daily.dirawat),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: harianData?.map((daily) => daily.tanggal.substring(0, 10)),

      colors: ["#FF4560", "#00E396", "#008FFB"],
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
      },

      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " orang";
            }
            return y;
          },
        },
      },
    },
  };
};
