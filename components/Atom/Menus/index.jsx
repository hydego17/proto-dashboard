import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

export default function Menus() {
  return (
    <Menu>
      <>
        <MenuButton px={2} as={Button} rightIcon={<ChevronDownIcon />}>
          <Avatar
            mx={2}
            name="mathroid"
            size="sm"
            src="https://avatars2.githubusercontent.com/u/3748658?v=4"
          />
        </MenuButton>
        <MenuList>
          <MenuItem>Account</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </>
    </Menu>
  );
}
