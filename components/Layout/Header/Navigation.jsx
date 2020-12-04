import styled from "@emotion/styled";

import Drawer from "components/Drawer";
import Menus from "components/Menus";
import { useEffect, useState } from "react";

export default function Navigation() {
  // Set viewport (max: 600px)
  const [mQuery, setMQuery] = useState({});

  useEffect(() => {
    const isLarge = {
      matches: window.innerWidth < 600 ? true : false,
    };
    setMQuery(isLarge);

    let mediaQuery = window.matchMedia(`(max-width: 600px)`);
    mediaQuery.addEventListener("change", setMQuery);

    return () => mediaQuery.removeEventListener("change", setMQuery);
  }, []);
  return (
    <NavStyled>
      <Menus />

      {mQuery.matches && <Drawer />}
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
