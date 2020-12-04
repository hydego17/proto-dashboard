import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import CountUp from "react-countup";

export default function SummaryCard({
  confirmed,
  deaths,
  recovered,
  lastUpdate,
}) {
  const data = [confirmed, deaths, recovered];
  const title = ["Total Confirmed Cases", "Deaths", "Recoveries"];

  const colors = useColorModeValue(["blue.600", "pink.500", "teal.500"]);

  return (
    <Box flex={{ md: 1 }} rounded="md" shadow="sm" bg="white" p={4}>
      <Text fontSize="sm" p={2}>
        Last update: {new Date(lastUpdate).toLocaleDateString()}
      </Text>

      {data.map((item, index) => (
        <Box
          key={index}
          // color={colors[index]}
          rounded="md"
          // bg={colors[index]}
          p={2}
        >
          <Heading as="h3" size="sm">
            {title[index]}
          </Heading>
          <Text>
            <CountUp start={0} end={item.value} duration={2} separator="," />
          </Text>
        </Box>
      ))}
    </Box>
  );
}
