import { Box, Heading, Link } from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <Box
      as="aside"
      bg="gray.100"
      maxW="200px"
      h="100vh"
      borderRight="1px solid #ededed"
    >
      <Box w="100%" py={4} px={6}>
        <Link>Home</Link>
      </Box>
      <Box w="100%" py={4} px={6}>
        <Link>Learning</Link>
      </Box>
      <Box w="100%" py={4} px={6}>
        <Link>Sidebar</Link>
      </Box>
    </Box>
  );
}
