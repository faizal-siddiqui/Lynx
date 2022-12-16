import {
  Box,
  List,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const EligibleProducts = ({ headText, bestOffers, footText }) => {
  return (
    <Box mt="20px">
      <Text fontWeight="600" mr="10px">
        {headText}
      </Text>
      <UnorderedList>
        {bestOffers.map((offer) => (
          <ListItem key={Math.random()*0.1*Math.random()} color="gray.600">{offer}</ListItem>
        ))}
      </UnorderedList>
      <Text fontSize="14px" color="#ff3e6c" fontWeight="600" mr="10px" cursor="pointer">
        {footText}
      </Text>
    </Box>
  );
};

export default EligibleProducts;
