import { Box, Heading, Select } from "@chakra-ui/react";

import { useProvinsiData } from "hooks/Indonesia";
import { useEffect, useState } from "react";
import PieChart from "./PieChart";

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
      <Box flex={{ md: 2 }} m={2} px={6} py={6} bg="white" w="full">
        <Heading pb={4} size="sm">
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
              <PieChart prov={prov} />
            </>
          )}
        </Box>
      </Box>
    </>
  );
}
