import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Wrap,
} from "@chakra-ui/react";
import CountUp from "react-countup";

export default function ProvinceStat({ prov }) {
  const data = [
    { case: "Kasus", value: prov?.kasus, stat: null },
    {
      case: "Dirawat",
      value: prov?.dirawat,
      stat: prov.penambahan?.positif | 0,
    },
    { case: "Sembuh", value: prov?.sembuh, stat: prov.penambahan?.sembuh | 0 },
    {
      case: "Meninggal",
      value: prov?.meninggal,
      stat: prov.penambahan?.meninggal | 0,
    },
  ];

  return (
    <>
      {/* Statistic for Province */}
      <Wrap px={6} w="full">
        {data.map((item, index) => (
          <StatGroup key={index} w={{ base: 1 / 2, md: 1 / 4 }}>
            <Stat p={2}>
              <StatLabel>{item.case}</StatLabel>
              <StatNumber>
                <CountUp
                  start={0}
                  end={item.value | 0}
                  duration={2}
                  separator=","
                />
              </StatNumber>
              <StatHelpText>
                {item.stat && (
                  <>
                    <StatArrow type="increase" />
                    <CountUp
                      start={0}
                      end={item.stat | 0}
                      duration={2}
                      separator=","
                    />
                  </>
                )}
              </StatHelpText>
            </Stat>
          </StatGroup>
        ))}
      </Wrap>
    </>
  );
}
