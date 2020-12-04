import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Flex,
  Heading,
  Wrap,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import CountUp from "react-countup";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function PieChart({ prov }) {
  const chart = chartOptions(prov);

  const data = [
    { case: "Kasus", value: prov?.kasus, stat: null },
    {
      case: "Dirawat",
      value: prov?.dirawat,
      stat: prov.penambahan?.positif | 0,
    },
    { case: "Sembuh", value: prov?.sembuh, stat: prov.penambahan?.sembuh | 0 },
    {
      case: "Meninggal",
      value: prov?.meninggal,
      stat: prov.penambahan?.meninggal | 0,
    },
  ];

  return (
    <>
      <Wrap px={6} w="full">
        {data.map((item, index) => (
          <StatGroup key={index} w={{ base: 1 / 2, md: 1 / 4 }}>
            <Stat p={2}>
              <StatLabel>{item.case}</StatLabel>
              <StatNumber>
                <CountUp
                  start={0}
                  end={item.value | 0}
                  duration={2}
                  separator=","
                />
              </StatNumber>
              <StatHelpText>
                {item.stat && (
                  <>
                    <StatArrow type="increase" />
                    <CountUp
                      start={0}
                      end={item.stat | 0}
                      duration={2}
                      separator=","
                    />
                  </>
                )}
              </StatHelpText>
            </Stat>
          </StatGroup>
        ))}
      </Wrap>
      <Wrap justify="center" pt={12}>
        <Chart
          options={chart.options}
          series={chart.series}
          type="donut"
          width={350}
        />
      </Wrap>
    </>
  );
}

const chartOptions = (prov) => {
  const gender = { ...prov?.jenis_kelamin };

  return {
    series: [gender["laki-laki"] | 0, gender["perempuan"] | 0],
    options: {
      labels: ["Laki-laki", "Perempuan"],
      chart: {
        type: "donut",
      },
    },
  };
};
