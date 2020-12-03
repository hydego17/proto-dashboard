import styled from "components/Layout/Footer/node_modules/@emotion/styled";
import {
  Box,
  Stack,
  Skeleton,
  SkeletonText,
} from "components/Layout/Footer/node_modules/@chakra-ui/react";

export default function Preloader() {
  const loader = [];
  for (let i = 0; i < 10; i++) {
    loader.push(<Skeleton key={i} height="20px" />);
  }

  return <Stack>{loader}</Stack>;
}
