import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const RatingCompo = ({ rating }) => {
  return (
    <Box>
      <Flex fontSize="30px" align="center">
        <Box fontSize="60px" mr="10px">
          {rating.star}
        </Box>
        <Box fontSize="40px">
          <StarIcon color="#14958f" />
        </Box>
      </Flex>
      <Box>
        <Text>{rating.count} Verified Buyers</Text>
      </Box>
    </Box>
  );
};

export default RatingCompo;
