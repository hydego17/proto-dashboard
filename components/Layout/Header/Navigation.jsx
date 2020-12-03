import Link from "next/link";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

export default function Navigation() {
  return (
    <NavStyled>
      <Avatar
        mx={2}
        name="Dan Abrahmov"
        size="md"
        src="https://bit.ly/dan-abramov"
      />
      <Menu>
        <>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Admin
          </MenuButton>
          <MenuList>
            <MenuItem>Menu 1</MenuItem>
            <MenuItem>Menu 2</MenuItem>
            <MenuItem>Menu 3</MenuItem>
            <MenuItem>
              <a href="/api/klaskita/logout">Logout</a>
            </MenuItem>
          </MenuList>
        </>
      </Menu>
    </NavStyled>
  );
}

const NavStyled = styled.ul`
  display: flex;
  align-items: center;

  button {
    margin: 0 2px;
  }
`;
