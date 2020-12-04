import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import { menus } from "./accordionMenus";

export default function AccordionMenu() {
  return (
    <Accordion defaultIndex={[2]} allowMultiple>
      {menus.map((menu, index) => (
        <AccordionItem key={index}>
          <AccordionButton py={3}>
            <Box flex="1" textAlign="left">
              {menu.tag}
            </Box>

            {menu.links.length > 0 && <AccordionIcon />}
          </AccordionButton>

          {menu.links.length > 0 &&
            menu.links.map((link, index) => (
              <a key={index} href="#">
                <AccordionPanel
                  _hover={{
                    bg: "gray.100",
                  }}
                  py={3}
                  pl={8}
                  fontSize="15px"
                >
                  {link}
                </AccordionPanel>
              </a>
            ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
