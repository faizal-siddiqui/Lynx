import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const IconHeading = ({ icon, headText, pText }) => {
  return (
    <>
      <Flex align="center">
        <Text mr="10px">{icon}</Text>
        <Text fontWeight="500">{headText}</Text>
      </Flex>
        <Text fontSize="13px" ml="20px" color="green">{pText}</Text>
    </>
  );
};

export default IconHeading;
