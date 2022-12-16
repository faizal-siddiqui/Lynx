import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ColouredButton from "./ColouredButton";

const DeliveryAddress = ({ address }) => {
  return (
    <Box>
      <Flex justify="space-between" align="center">
        <Text>Deliver to: {address}</Text>
        <ColouredButton
          color={"red"}
          btnText={"CHANGE ADDRESS"}
          hoverColor={"#FDDDE6"}
        />
      </Flex>
    </Box>
  );
};

export default DeliveryAddress;
