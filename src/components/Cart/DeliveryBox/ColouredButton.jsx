import { Button } from "@chakra-ui/react";
import React from "react";

const ColouredButton = ({
  color,
  btnText,
  hoverColor,
  padding = "10px",
  fsize = "12px",
  bgColor = "#fff",
}) => {
  return (
    <Button
      color={color}
      _hover={{ bgColor: hoverColor }}
      bgColor={bgColor}
      border="1px"
      borderColor={color}
      p={padding}
      borderRadius="0px"
      fontSize={fsize}
    >
      {btnText}
    </Button>
  );
};

export default ColouredButton;
