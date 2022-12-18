import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const PinkButton = ({
  width = "100%",
  btnText,
  mt,
  link,
  fs,
  color = "#fff",
  bgColor = "#ff3e6c",
  OnClick,
  disabled = false,
}) => {
  return (
    <RouterLink to={link}>
      <Button
        p="22px"
        mt={mt}
        w={width}
        mr="20px"
        fontSize={fs}
        bgColor={bgColor}
        color={color}
        onClick={OnClick}
        disabled={disabled}
      >
        {/* <BsHandbag /> */}
        <Text ml="10px">{btnText}</Text>
      </Button>
    </RouterLink>
  );
};

export default PinkButton;
