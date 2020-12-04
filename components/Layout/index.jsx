import { Box, Flex } from "@chakra-ui/react";

import { useViewPort } from "providers/ContextWrapper";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "../Atom/Sidebar";

export default function Layout({ children }) {
  // Only display sidebar when vieport > 1023 px
  const { mQuery } = useViewPort();
  return (
    <>
      <Header />
      <Flex as="main" bg="gray.100" minH="100vh">
        {mQuery.matches && <Sidebar />}

        <Box as="section" w="full" px={6} py={8}>
          {children}
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
