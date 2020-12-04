import { Box } from "@chakra-ui/react";
import AccordionMenu from "components/Atom/Accordion";

const Border = `1px solid #ededed`;

export default function Sidebar() {
  return (
    <Box as="aside" width={250} py={6} bg="white" borderRight={Border}>
      <AccordionMenu />
    </Box>
  );
}
