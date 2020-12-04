import { Box } from "@chakra-ui/react";

import { useProvinsiData } from "hooks/Indonesia";

export default function ProvinsiStat() {
  const { provinsiData, loading } = useProvinsiData();
  return (
    <>
      <Box m={2} px={6} py={6} bg="white" w="full">
        test
      </Box>
    </>
  );
}
