import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import AccordionMenu from "../Accordion";

export default function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button ml={2} py="1.3rem" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Codemi</DrawerHeader>

            {/* Drawer body */}
            <DrawerBody p={0}>
              <AccordionMenu />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
