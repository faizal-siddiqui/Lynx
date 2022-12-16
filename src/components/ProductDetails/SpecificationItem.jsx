import { GridItem, Text } from "@chakra-ui/react";
import React from "react";

const SpecificationItem = ({ headText, prodSpecs }) => {
  return (
    <GridItem
      borderBottom="1px"
      borderColor="gray.300"
      fontSize="13px"
      color="gray.600"
    >
      <Text>{headText}</Text>
      <Text mb="5px">{prodSpecs}</Text>
    </GridItem>
  );
};

export default SpecificationItem;
