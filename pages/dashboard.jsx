import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  Skeleton,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <Box minH="100vh" className="container"></Box>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  return { props: {} };
}
