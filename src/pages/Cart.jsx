import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import CartNavbar from "../components/Cart/CartNavbar/CartNavbar";
import DeliveryBox from "../components/Cart/DeliveryBox/DeliveryBox";
import PriceBox from "../components/Cart/PriceBox/PriceBox";
import CardFooter from "../components/Cart/CartFooter/CardFooter";

const Cart = () => {
  return (
    <Box>
      <CartNavbar />
      <Flex
        gap="20px"
        flexDirection={{ lg: "row", md: "column", sm: "column" }}
      >
        <Box
          mt="25px"
          w={{ lg: "65%", md: "80%", sm: "90%" }}
          ml={{ lg: "13%", md: "10%", sm: "5%" }}
        >
          <DeliveryBox />
        </Box>
        <Box
          mt="25px"
          p="15px"
          w={{ lg: "35%", md: "80%", sm: "90%" }}
          mr={{ lg: "13%", md: "10%", sm: "5%" }}
          ml={{ lg: "0%", md: "10%", sm: "5%" }}
          border="1px"
          borderColor="gray.200"
        >
          <PriceBox />
        </Box>
      </Flex>
      <CardFooter />
    </Box>
  );
};

export default Cart;
