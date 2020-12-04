import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Box,
} from "@chakra-ui/react";

import CountUp from "react-countup";

export default function IndoStat({ data: { total, penambahan } }) {
  return (
    <Box m={2} flex={{ md: 1 }} px={6} py={6} bg="white" w="full">
      <StatGroup align="center">
        <Stat p={2}>
          <StatLabel>Positif</StatLabel>
          <StatNumber>
            <CountUp start={0} end={total.positif} duration={2} separator="," />
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

        <Stat p={2}>
          <StatLabel>Dirawat</StatLabel>
          <StatNumber>
            <CountUp start={0} end={total.dirawat} duration={2} separator="," />
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
        <Stat p={2}>
          <StatLabel>Sembuh</StatLabel>
          <StatNumber>
            <CountUp start={0} end={total.sembuh} duration={2} separator="," />
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
    </Box>
  );
}
