import { Text } from "@chakra-ui/react";
import React from "react";

const PriceBoxHeading = ({headText}) => {
  return (
    <Text fontWeight="500" fontSize="13px" color="#555d6e">
      {headText}
    </Text>
  );
};

export default PriceBoxHeading;
