import { Heading, Stack, Skeleton, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const SkeletonCompo = () => {
  return (
    <Grid
      mt="20px"
      gap="10px"
      templateColumns={{
        lg: "repeat(4, 1fr)",
        md: "repeat(3, 1fr)",
        sm: "repeat(2, 1fr)",
        base: "repeat(2, 1fr)",
      }}
      gap={5}
    >
      <GridItem w="100%">
        <Skeleton height="100px" />
        <Skeleton height="100px" />
      </GridItem>
      <GridItem w="100%">
        <Skeleton height="100px" />
        <Skeleton height="100px" />
      </GridItem>
      <GridItem w="100%">
        <Skeleton height="100px" />
        <Skeleton height="100px" />
      </GridItem>
      <GridItem w="100%">
        <Skeleton height="100px" />
        <Skeleton height="100px" />
      </GridItem>
      <GridItem w="100%">
        <Skeleton height="100px" />
        <Skeleton height="100px" />
      </GridItem>
      <GridItem w="100%">
        <Skeleton height="100px" />
        <Skeleton height="100px" />
      </GridItem>
      <GridItem w="100%">
        <Skeleton height="100px" />
        <Skeleton height="100px" />
      </GridItem>
      <GridItem w="100%">
        <Skeleton height="100px" />
        <Skeleton height="100px" />
      </GridItem>
      <GridItem w="100%">
        <Skeleton height="100px" />
        <Skeleton height="100px" />
      </GridItem>
      <GridItem w="100%">
        <Skeleton height="100px" />
        <Skeleton height="100px" />
      </GridItem>
      <GridItem w="100%">
        <Skeleton height="100px" />
        <Skeleton height="100px" />
      </GridItem>
      <GridItem w="100%">
        <Skeleton height="100px" />
        <Skeleton height="100px" />
      </GridItem>
    </Grid>
  );
};

export default SkeletonCompo;
