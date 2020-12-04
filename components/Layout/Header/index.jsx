import Link from "next/link";

import { Box, Flex, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

import Navigation from "./Navigation";

export default function Header() {
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
          <Box py={2} maxW={120} className="logo">
            <Link href="/">
              <a>
                <Image
                  w="full"
                  src="https://codemi.co.id/wp-content/uploads/2019/08/codemi-394x150.png"
                />
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
  z-index: 999;
  background: white;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 5px -6px rgba(0, 0, 0, 0.1);

  .logo {
    display: inline-block;
    width: 175px;
  }
`;
