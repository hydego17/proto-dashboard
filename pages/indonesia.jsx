import { Box, Divider, Heading, Spinner, Text, Wrap } from "@chakra-ui/react";
import IndoStat from "components/Card/IndoStat";
import ProvinsiStat from "components/Card/ProvinsiStat";
import { useIndonesiaData } from "hooks/Indonesia";
import Head from "next/head";

export default function IndonesiaPage() {
  const { indoData, loading } = useIndonesiaData();
  return (
    <>
      <Head>
        <title> Indonesia </title>
      </Head>

      <Wrap w="100%">
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
