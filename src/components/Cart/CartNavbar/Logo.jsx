import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Logo = ({ imageSrc, width, imageText, mr, color, fsize = "14px" }) => {
  return (
    <Flex cursor="pointer" align="center" color={color}>
      <Image mr={mr} src={imageSrc} alt={imageSrc} w={width} />
      <Text fontSize={fsize} mr="15px">
        {imageText}
      </Text>
    </Flex>
  );
};

export default Logo;
