import { useState, useEffect } from "react";
import Link from "next/link";

import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

import Navigation from "./Navigation";

export default function Header() {
  // Set viewport (min: 1023px)
  const [mQuery, setMQuery] = useState({});

  useEffect(() => {
    const isLarge = {
      matches: window.innerWidth > 1023 ? true : false,
    };
    setMQuery(isLarge);

    let mediaQuery = window.matchMedia(`(min-width: 1023px)`);
    mediaQuery.addEventListener("change", setMQuery);

    return () => mediaQuery.removeEventListener("change", setMQuery);
  }, []);

  return (
    <>
      <HeaderStyled>
        <Flex
          as="nav"
          borderBottom="1px solid #ededed"
          justify="space-between"
          align="center"
          px={6}
          py={2}
        >
          <Box className="logo">
            <Link href="/">
              <a>
                <Heading size="md">Codemi</Heading>
              </a>
            </Link>
          </Box>

          <Navigation />
        </Flex>
      </HeaderStyled>
    </>
  );
}

const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
  background: white;
  background-color: rgba(255, 255, 255, 0.95);

  .logo {
    display: inline-block;
    width: 175px;
  }
`;
