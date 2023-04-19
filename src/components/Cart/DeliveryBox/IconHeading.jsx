import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const IconHeading = ({ icon, headText, pText, fsize = "14px" }) => {
  return (
    <>
      <Flex align="center">
        <Text fontSize={fsize} mr="10px">
          {icon}
        </Text>
        <Text fontSize={fsize} fontWeight="500">
          {headText}
        </Text>
      </Flex>
      <Text fontSize={fsize} ml="20px" color="green">
        {pText}
      </Text>
    </>
  );
};

export default IconHeading;
