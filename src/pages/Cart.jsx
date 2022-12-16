import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import CartNavbar from "../components/Cart/CartNavbar/CartNavbar";
import DeliveryBox from "../components/Cart/DeliveryBox/DeliveryBox";

const Cart = () => {
  return (
    <Box>
      <CartNavbar />
      <Flex gap="20px">
        <Box w="60%" ml="13%" >
          <DeliveryBox />
        </Box>
        <Box w="40%" mr="13%" border="1px" borderColor="gray.200">
          <Text>jhugjhgujy</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Cart;
