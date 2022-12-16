import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";

const SizeCircles = ({ s, price }) => {
  return (
    <Box
      mr="10px"
      pl="15px"
      pr="15px"
      border="1px"
      borderColor="gray.300"
      borderRadius="30px"
      _hover={{ borderColor: "pink.400" }}
      cursor="pointer"
      mb={{lg: "0",md: "6px", sm: "9px"}}
    >
      <Flex fontSize="13px" direction="column" align="center" color="gray.600" >
        <Box>
          <b>{s}</b>
        </Box>
        <Box>Rs {price}</Box>
      </Flex>
    </Box>
  );
};

export default SizeCircles;
