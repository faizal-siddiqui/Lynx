import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const RatingCompo = ({ rating }) => {
  return (
    <Box>
      <Flex fontSize="30px" align="center">
        <Box
          fontSize={{ lg: "60px", md: "50px", sm: "40px", base: "30px" }}
          mr="10px"
        >
          {rating.star}
        </Box>
        <Box fontSize={{ lg: "40px", md: "35px", sm: "30px", base: "20px" }}>
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
