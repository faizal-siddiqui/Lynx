import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CartLinks from "./CartLinks";

const AllCartLinks = () => {
  const activeStyle = { borderBottom: "2px solid #14cda8", color: "#14cda8" };
  return (
    <Flex align="center" m="auto">
      <Box
        fontWeight="600"
        mr="5px"
        fontSize={{ lg: "17px", md: "15px", sm: "12px", base: "10px" }}
      >
        <CartLinks
          location={"/cart"}
          linkText={"BAG "}
          activeStyle={activeStyle}
        />
      </Box>

      <Box mr="5px">
        <Text fontSize="8px"> ----------------------- </Text>
      </Box>
      <Box
        fontWeight="600"
        mr="5px"
        fontSize={{ lg: "17px", md: "15px", sm: "12px", base: "10px" }}
      >
        <CartLinks
          location={"/payment"}
          linkText={" PAYMENT"}
          activeStyle={activeStyle}
        />
      </Box>
    </Flex>
  );
};

export default AllCartLinks;
