import { Box, Flex, Progress } from "@chakra-ui/react";
import React, { useState } from "react";
import IconHeading from "./IconHeading";
import { IoIosStarOutline } from "react-icons/io";
import RateStar from "./RateStar";
import RatingCompo from "./RatingCompo";

const RatingBox = ({ singleData, UpdateStar }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  return (
    <Box>
      <IconHeading icon={<IoIosStarOutline />} headText={"RATINGS"} />
      <Progress
        colorScheme="teal"
        value={singleData?.rating && singleData.rating.star * 20}
        mb={{ sm: "10px" }}
      />
      <Flex
        align="center"
        justify="space-around"
        direction={{
          lg: "row",
          md: "column-reverse",
          sm: "column-reverse",
          base: "column-reverse",
        }}
      >
        <RateStar
          maxRating={5}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          UpdateStar={UpdateStar}
        />
        <Box>
          {singleData?.rating && <RatingCompo rating={singleData.rating} />}
        </Box>
      </Flex>
    </Box>
  );
};

export default RatingBox;
