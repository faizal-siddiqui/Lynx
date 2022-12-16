import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const IconHeading = ({ icon, headText }) => {
  return (
    <Flex align="center">
      <Text fontWeight="600" mr="10px" my="15px">
        {headText}
      </Text>
      <Box>{icon}</Box>
    </Flex>
  );
};

export default IconHeading;
