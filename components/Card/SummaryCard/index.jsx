import { Box, Text } from "@chakra-ui/react";

import Stats from "./Stats";
import CardContainer from "./CardContainer";

export default function SummaryCard({
  confirmed,
  deaths,
  recovered,
  lastUpdate,
}) {
  const data = [confirmed, deaths, recovered];

  return (
    <CardContainer>
      <Box>
        {data.map((item, index) => (
          <Box key={index} p={2}>
            <Stats {...item} index={index} />
          </Box>
        ))}
      </Box>

      <Text fontSize="sm" p={2}>
        Last update: {new Date(lastUpdate).toLocaleDateString()}
      </Text>
    </CardContainer>
  );
}
