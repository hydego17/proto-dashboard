import {
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

import CountUp from "react-countup";

export default function Stats({ value, index }) {
  const title = ["Total Confirmed Cases", "Deaths", "Recoveries"];
  return (
    <>
      <StatGroup>
        <Stat>
          <StatLabel py={2}> {title[index]}</StatLabel>
          <Divider mb={1} />
          <StatNumber py={[2, 0]}>
            <CountUp start={0} end={value} duration={2} separator="," />
          </StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            <CountUp
              start={0}
              end={23.36}
              decimals={2}
              decimal="."
              duration={2}
              separator=","
            />
            %
          </StatHelpText>
        </Stat>
      </StatGroup>
    </>
  );
}
