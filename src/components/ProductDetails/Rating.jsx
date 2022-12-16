import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Rating = ({ singleData }) => {
  console.log('singleData:', singleData)
  return (
    <Flex
      fontSize="17px"
      width="fit-content"
      bottom="9px"
      left="10px"
      bgColor="rgba(255, 255, 255, 0.5)"
      pr="3px"
      border="1px"
      borderColor="gray.200"
      mt="8px"
      color="gray.600"
    >
      <Flex align="center">
        <Box ml="10px" mr="3px" fontWeight="600">
          {singleData?.rating?.star && singleData.rating.star}
        </Box>
        <StarIcon color="teal.500" fontSize="12px" />
      </Flex>
      <Box ml="5px">
        |{" "}
        {singleData?.rating?.count && singleData.rating.count >= 1000
          ? Math.ceil(singleData.rating.count / 1000) + "k"
          : singleData?.rating?.count && singleData.rating.count} Ratings
      </Box>
    </Flex>
  );
};

export default Rating;
