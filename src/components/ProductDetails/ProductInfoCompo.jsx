import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ProductInfoCompo = ({ headText, innerText }) => {
  return (
    <Box mb="10px">
      <Text  fontWeight="600">{headText}</Text>
      <Text color="gray.600">{innerText}</Text>
    </Box>
  );
};

export default ProductInfoCompo;
