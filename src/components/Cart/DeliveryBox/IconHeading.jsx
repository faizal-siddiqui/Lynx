import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const IconHeading = ({ icon, headText }) => {
  return (
    <Flex align="center">
      <Text mr="10px">{icon}</Text>
      <Text fontWeight="500">{headText}</Text>
    </Flex>
  );
};

export default IconHeading;
