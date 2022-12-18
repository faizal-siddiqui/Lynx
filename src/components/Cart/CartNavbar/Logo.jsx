import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Logo = ({ imageSrc, width, imageText, mr, color }) => {
  return (
    <Flex cursor="pointer" align="center" color={color}>
      <Image mr={mr} src={imageSrc} alt={imageSrc} w={width} />
      <Text fontSize="14px" mr="15px">{imageText}</Text>
    </Flex>
  );
};

export default Logo;
