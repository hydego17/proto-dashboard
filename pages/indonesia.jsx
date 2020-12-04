import { Wrap } from "@chakra-ui/react";
import IndoStat from "components/Card/IndoStat";
import ProvinsiStat from "components/Card/ProvinsiStat";
import { useIndonesiaData } from "hooks/Indonesia";
import Head from "next/head";

export default function IndonesiaPage() {
  // Fetch data from API using SWR custom Hook
  const { indoData, loading } = useIndonesiaData();
  return (
    <>
      <Head>
        <title> Indonesia </title>
      </Head>

      <Wrap w="full">
        {indoData && (
          <>
            <IndoStat data={indoData} />

            <ProvinsiStat />
          </>
        )}
      </Wrap>
    </>
  );
}
