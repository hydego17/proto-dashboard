import { Box, Button, Divider, Flex, Heading } from "@chakra-ui/react";

import { useViewPort } from "providers/ContextWrapper";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "../Atom/Sidebar";
import Link from "next/link";

export default function Layout({ children }) {
  // Only display sidebar when vieport > 1023 px
  const { mQuery } = useViewPort();
  return (
    <>
      <Header />

      <Flex as="main" bg="gray.100" minH="100vh">
        {mQuery.matches && <Sidebar />}

        <Box as="section" w="full" px={6} py={8}>
          <Heading as="h1" px={2} size="lg" pb={4}>
            Dashboard
          </Heading>

          <Flex pt={4}>
            <Link href="/">
              <Button mr={2}>Global Data</Button>
            </Link>

            <Link href="/indonesia">
              <Button>Indonesia</Button>
            </Link>
          </Flex>
          <Divider my={2} />

          {children}
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
