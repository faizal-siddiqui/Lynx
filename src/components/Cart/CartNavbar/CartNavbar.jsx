import React from "react";
import Logo from "./Logo";
import image from "../../../images/lynx-logo.png";
import { Box, Flex } from "@chakra-ui/react";
import AllCartLinks from "./AllCartLinks";

const CartNavbar = () => {
  return (
    <Box pl="40px" border="1px" borderColor="gray.200">
      <Flex p="13px" align="center">
        <Logo imageSrc={image} width={"100px"} />
        <AllCartLinks />
        <Logo
          imageSrc={
            "https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
          }
          width={"40px"}
          imageText={"100% Secure"}
          mr={"15px"}
          color={"gray"}
        />
      </Flex>
    </Box>
  );
};

export default CartNavbar;
