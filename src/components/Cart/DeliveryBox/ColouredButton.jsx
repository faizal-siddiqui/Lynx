import { Button } from "@chakra-ui/react";
import React from "react";

const ColouredButton = ({ color, btnText, hoverColor }) => {
  return (
    <Button
      color={color}
      _hover={{ bgColor: hoverColor }}
      bgColor="#fff"
      border="1px"
      borderColor={color}
      p={"8px"}
      borderRadius="0px"
      fontSize="12px"
    >
      {btnText}
    </Button>
  );
};

export default ColouredButton;
