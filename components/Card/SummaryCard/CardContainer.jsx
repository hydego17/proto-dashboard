import { Flex } from "@chakra-ui/react";

export default function CardContainer({ children }) {
  return (
    <Flex
      direction="column"
      justify="space-around"
      w="full"
      m={2}
      flex={{ md: 1 }}
      rounded="md"
      shadow="sm"
      bg="teal.700"
      color="white"
      py={[8, 4]}
      px={8}
    >
      {children}
    </Flex>
  );
}
