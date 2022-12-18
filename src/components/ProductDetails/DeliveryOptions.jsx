import { Box, Flex, Input, InputGroup, InputLeftAddon, InputRightAddon, InputRightElement, Stack, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import {BsTruck} from "react-icons/bs"
import DeliveryIcons from "./DeliveryIcons";
import {FaShippingFast} from "react-icons/fa"
import {GiTakeMyMoney} from "react-icons/gi"
import {IoArrowRedoCircleOutline} from "react-icons/io5"
import { tomorrow } from "./RandomDate";

const DeliveryOptions = () => {
    
  return (
    <Box>
      <Flex align="center">
        <Text fontWeight="600" mr="10px">DELIVERY OPTIONS</Text>
        <Box><BsTruck /></Box>
      </Flex>
      <InputGroup size="sm" w={{lg:"30%", md:"40%", sm: "60%"}} mt="20px">
        {/* <InputLeftAddon children="https://" /> */}
        <Input placeholder="Pincode" />
        <InputRightAddon children="Search" />
      </InputGroup>
      <Stack my="15px">
        <DeliveryIcons deliveryIcon={<FaShippingFast fontSize="30px"/>} deliveryText={`Get it by ${tomorrow()}`} />
        <DeliveryIcons deliveryIcon={<GiTakeMyMoney fontSize="30px"/>} deliveryText={"Pay on delivery available"} />
        <DeliveryIcons deliveryIcon={<IoArrowRedoCircleOutline fontSize="30px"/>} deliveryText={"Easy 30 days return & exchange available"} />
      </Stack>
    </Box>
  );
};

export default DeliveryOptions;
