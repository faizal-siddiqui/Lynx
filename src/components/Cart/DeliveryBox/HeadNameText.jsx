import { Text } from "@chakra-ui/react";
import React from "react";

const HeadNameText = ({ headText, pText, colorText }) => {
  return (
    <>
      <Text fontSize="14px" fontWeight="700">
        {headText}
      </Text>
      <Text fontSize="13px" color="gray.800">
        {pText}
      </Text>
      <Text cursor="pointer" color="red">{colorText}</Text>
    </>
  );
};

export default HeadNameText;
