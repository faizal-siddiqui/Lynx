import { IoIosStarOutline } from "react-icons/io";
import React from "react";
import IconHeading from "./IconHeading";
import { Box, Button, Input, InputGroup, InputRightAddon, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Review = ({ singleData, AddReviews, setInputReview, inputReview }) => {

    const {id} = useParams()

  return (
    <Box>
      <IconHeading
        icon={<IoIosStarOutline />}
        headText={"WHAT CUSTOMERS SAID"}
      />
      <Box>{singleData?.reviews && singleData.reviews.map((el) => <Text border="1px" borderColor="gray.200" h="30px" textAlign="center" mb="10px" key={Math.random()*0.2167*Math.random()}>{el}</Text>)}</Box>
      <InputGroup size="md">
        <Input value={inputReview} onChange={(e) => setInputReview(e.target.value)} placeholder="Share your Reviews" />
        <Button onClick={() => AddReviews(id)} bgColor="teal.300">Share</Button>
      </InputGroup>
    </Box>
  );
};

export default Review;
