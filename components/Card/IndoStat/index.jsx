import styled from "@emotion/styled";
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
  Text,
} from "@chakra-ui/react";

import CountUp from "react-countup";
import { formatDate } from "utils/date";

export default function IndoStat({ data: { total, penambahan } }) {
  return (
    <Box as="section" flex={{ md: 1 }} m={2} px={6} py={6} bg="white" w="full">
      <StyledCard>
        <Heading pb={4} size="sm">
          Statistik di Indonesia
        </Heading>
        <Wrap mb={4}>
          <StatGroup
            className="__positif__stat"
            w={{ base: 1 / 2, md: "full" }}
          >
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
          <StatGroup
            className="__dirawat__stat"
            w={{ base: 1 / 2, md: "full" }}
          >
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
          <StatGroup className="__sembuh__stat" w={{ base: 1 / 2, md: "full" }}>
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
          <StatGroup
            className="__meninggal__stat"
            w={{ base: 1 / 2, md: "full" }}
          >
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

        <Text as="small">
          *Update terakhir: {formatDate(total.lastUpdate, "id")}
        </Text>
      </StyledCard>
    </Box>
  );
}

const StyledCard = styled.div`
  svg {
    color: #002ba0;
  }
`;
