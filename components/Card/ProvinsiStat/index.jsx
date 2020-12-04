import { useEffect, useState } from "react";
import { Box, Heading, Select, Text } from "@chakra-ui/react";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { useProvinsiData } from "hooks/Indonesia";

import ProvinceStat from "./ProvinceStat";
import DailyIndoChart from "./DailyIndoChart";

export default function ProvinsiStat() {
  const { provinsiData, loading } = useProvinsiData();

  const [prov, setProv] = useState({});

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (provinsiData?.length > 0) {
      const wilayah = provinsiData[idx];

      setProv(wilayah);
    }
  }, [provinsiData, idx]);

  return (
    <>
      <Box flex={{ md: 2 }} w="full">
        <Box m={2} mb={4} px={6} py={6} bg="white">
          {/* Daily Stats */}
          <Heading size="sm">Statistik Harian</Heading>
          <Text as="small"> 2 Pekan terakhir </Text>
          <DailyIndoChart />
        </Box>

        <Box m={2} px={6} py={6} bg="white">
          {/* Province Stats */}
          <Heading pt={6} pb={4} size="sm">
            Data tiap Provinsi
          </Heading>
          <Select onChange={(e) => setIdx(e.target.value)}>
            {provinsiData &&
              provinsiData.map((wilayah, index) => (
                <option key={index} value={index}>
                  {wilayah.provinsi}
                </option>
              ))}
          </Select>

          <Box py={6}>
            {provinsiData && (
              <>
                <ProvinceStat prov={prov} />
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
