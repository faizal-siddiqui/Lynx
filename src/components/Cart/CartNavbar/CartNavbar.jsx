import React from "react";
import Logo from "./Logo";
import image from "../../../images/lynx-logo.png";
import { Box, Flex } from "@chakra-ui/react";
import AllCartLinks from "./AllCartLinks";
import { Link } from "react-router-dom";

const CartNavbar = () => {
  return (
    <Box
      pl={{ lg: "20px", md: "18px", sm: "15px", base: "6px" }}
      border="1px"
      borderColor="gray.200"
    >
      <Flex py="8px" align="center">
        <Link to="/">
          <Logo
            imageSrc={image}
            width={{ lg: "100px", md: "80px", sm: "70px", base: "60px" }}
          />
        </Link>
        <AllCartLinks />

        <Logo
          imageSrc={
            "https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
          }
          width={{ lg: "30px", md: "25px", sm: "22px", base: "14px" }}
          imageText={"100% Secure"}
          mr={{ lg: "15px", md: "14px", sm: "12px", base: "1px" }}
          color={"gray"}
          fsize={{ lg: "14px", md: "13px", sm: "12px", base: "9px" }}
        />
      </Flex>
    </Box>
  );
};

export default CartNavbar;
