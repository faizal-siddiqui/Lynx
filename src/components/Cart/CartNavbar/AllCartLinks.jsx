import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CartLinks from "./CartLinks";

const AllCartLinks = () => {
  const activeStyle = { borderBottom: "2px solid #14cda8", color: "#14cda8" };
  return (
    <Flex align="center" m="auto">
      <Box fontWeight="600" mr="5px">
        <CartLinks
          location={"/cart"}
          linkText={"BAG "}
          activeStyle={activeStyle}
        />
      </Box>
      <Box mr="5px">
        <Text fontSize="10px"> ---------------- </Text>
      </Box>
      <Box fontWeight="600" mr="5px">
        <CartLinks
          location={"/address"}
          linkText={" ADDRESS "}
          activeStyle={activeStyle}
        />
      </Box>
      <Box mr="5px">
        <Text fontSize="10px" > ---------------- </Text>
      </Box>
      <Box fontWeight="600" mr="5px">
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
