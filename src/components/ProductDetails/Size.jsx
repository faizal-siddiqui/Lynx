import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import SizeCircles from "./SizeCircles";

const Size = ({singleData}) => {

  return (
    <Box my="20px">
      <Flex align="center">
        <Heading fontSize="15px" mr="20px">
          SELECT SIZE
        </Heading>
        <Heading color="pink.400" fontSize="15px">
          SELECT CHART
          <ChevronRightIcon />
        </Heading>
      </Flex>
      <Flex mt="20px" direction={{lg: "row", md: "column", sm: "column"}} >
        {
            sizeArr.map((el) => <SizeCircles key={Math.random()*0.243*Math.random()*0.23} s={el} price={singleData?.price} />)
        }
        
      </Flex>
    </Box>
  );
};

export default Size;

const sizeArr = ["S", "M", "L", "XL", "XXL"];
