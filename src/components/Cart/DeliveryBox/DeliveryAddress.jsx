import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { DeliveryContext } from "../../../contexts/DeliveryContext";
import ColouredButton from "./ColouredButton";

const DeliveryAddress = ({ address }) => {
  const { profileData } = useContext(DeliveryContext);

  const size = {
    lg: "14px",
    md: "14px",
    sm: "13px",
    base: "11px",
  };

  return (
    <Box>
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <Text fontSize={size}>Deliver to:</Text>
          <Text fontSize={size} fontWeight="500">
            {profileData?.location && profileData.location}
          </Text>
        </Flex>
        <ColouredButton
          fsize={size}
          color={"red"}
          btnText={"CHANGE ADDRESS"}
          hoverColor={"#FDDDE6"}
        />
      </Flex>
    </Box>
  );
};

export default DeliveryAddress;
