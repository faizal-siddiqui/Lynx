import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import DeliveryAddress from "./DeliveryAddress";
import IconHeading from "./IconHeading";
import Offersbox from "./Offersbox";

const DeliveryBox = ({cartItems}) => {
  return (
    <>
      <Stack spacing={3}>
        <Box p="15px" border="1px" borderColor="gray.200">
          <DeliveryAddress />
        </Box>
        <Box p="15px" border="1px" borderColor="gray.200">
          <Offersbox />
        </Box>
        <Box p="15px" border="1px" borderColor="gray.200">
          <Flex align="center">
            <Image
              src={
                "https://constant.myntassets.com/checkout/assets/img/ship-free.webp"
              }
              alt=""
              w="40px"
              mr="10px"
            />
            <Text color="gray" fontSize="13px">
              Yay! No Convience fee on this order
            </Text>
          </Flex>
        </Box>
        <Box p="15px">
          <Flex py="25px" align="center" justify="space-between">
             <Text fontWeight="600">{cartItems} ITEMS SELECTED</Text>  
             <Text fontWeight="500" fontSize="13px" color="#848482" cursor="pointer">REMOVE</Text>  
          </Flex>
        </Box>
      </Stack>
    </>
  );
};

export default DeliveryBox;
