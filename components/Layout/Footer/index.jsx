import { Box, Flex, Heading, Text, Container } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" fontSize="sm" w="100%" borderTop="1px solid #ededed">
      <Flex
        px={6}
        pt={[6, 2]}
        direction={["column-reverse", "row"]}
        justify="space-between"
        align={["flex-start", "center"]}
      >
        <Text py={4}>Copyright © 2020</Text>

        <Flex direction={["column", "row"]} wrap="wrap" as="ul">
          <Box py={2} pr={3} as="li">
            <a href="#">Terms</a>
          </Box>
          <Box py={2} pr={3} as="li">
            <a href="#">Privacy</a>
          </Box>
          <Box py={2} pr={3} as="li">
            <a href="#">FAQ</a>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
