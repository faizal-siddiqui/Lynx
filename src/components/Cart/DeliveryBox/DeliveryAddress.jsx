import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { DeliveryContext } from "../../../contexts/DeliveryContext";
import ColouredButton from "./ColouredButton";

const DeliveryAddress = ({ address }) => {
  const { profileData } = useContext(DeliveryContext);

  return (
    <Box>
      <Flex justify="space-between" align="center">
        <Flex align="center">
        <Text>Deliver to:</Text>
        <Text fontWeight="500">{profileData?.location && profileData.location}</Text>
        </Flex>
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
