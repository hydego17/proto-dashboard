import { Box, Flex } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Flex as="main" bg="gray.100" minH="100vh">
        <Sidebar />

        <Box as="section" w="full" px={6} py={8}>
          {children}
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
