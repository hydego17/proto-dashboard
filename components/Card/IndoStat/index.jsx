import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Box,
  Wrap,
  Heading,
} from "@chakra-ui/react";

import CountUp from "react-countup";

export default function IndoStat({ data: { total, penambahan } }) {
  return (
    <Box flex={{ md: 1 }} m={2} px={6} py={6} bg="white" w="full">
      <Heading pb={4} size="sm">
        Statistik di Indonesia
      </Heading>
      <Wrap>
        <StatGroup w={{ base: 1 / 2, md: "full" }}>
          <Stat p={2}>
            <StatLabel>Positif</StatLabel>
            <StatNumber>
              <CountUp
                start={0}
                end={total.positif}
                duration={2}
                separator=","
              />
            </StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />

              <CountUp
                start={0}
                end={penambahan.positif}
                duration={2}
                separator=","
              />
            </StatHelpText>
          </Stat>
        </StatGroup>
        <StatGroup w={{ base: 1 / 2, md: "full" }}>
          <Stat p={2}>
            <StatLabel>Dirawat</StatLabel>
            <StatNumber>
              <CountUp
                start={0}
                end={total.dirawat}
                duration={2}
                separator=","
              />
            </StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              <CountUp
                start={0}
                end={penambahan.dirawat}
                duration={2}
                separator=","
              />
            </StatHelpText>
          </Stat>
        </StatGroup>
        <StatGroup w={{ base: 1 / 2, md: "full" }}>
          <Stat p={2}>
            <StatLabel>Sembuh</StatLabel>
            <StatNumber>
              <CountUp
                start={0}
                end={total.sembuh}
                duration={2}
                separator=","
              />
            </StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              <CountUp
                start={0}
                end={penambahan.sembuh}
                duration={2}
                separator=","
              />
            </StatHelpText>
          </Stat>
        </StatGroup>
        <StatGroup w={{ base: 1 / 2, md: "full" }}>
          <Stat p={2}>
            <StatLabel>Meninggal</StatLabel>
            <StatNumber>
              <CountUp
                start={0}
                end={total.meninggal}
                duration={2}
                separator=","
              />
            </StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              <CountUp
                start={0}
                end={penambahan.meninggal}
                duration={2}
                separator=","
              />
            </StatHelpText>
          </Stat>
        </StatGroup>
      </Wrap>
    </Box>
  );
}
