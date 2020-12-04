import styled from "@emotion/styled";

import { useViewPort } from "providers/ContextWrapper";

import Drawer from "components/Atom/Drawer";
import Menus from "components/Atom/Menus";

export default function Navigation() {
  const { mQuery } = useViewPort();
  return (
    <NavStyled>
      <Menus />

      {!mQuery.matches && <Drawer />}
    </NavStyled>
  );
}

const NavStyled = styled.ul`
  display: flex;
  align-items: center;

  .chakra-menu__menu-button {
    padding: 22px 8px;
  }

  .chakra-avatar {
    margin: 0 2px;
  }
`;
