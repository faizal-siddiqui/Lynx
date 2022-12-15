import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import ImageCarausel from "./ImageCarausel";
import {
    FilTERBRAND,
    FilTERPRICE,
    FILTERDISCOUNT,
    FilTERRATING,
  } from "./ProductsData";
const SingleProduct = ({ prod, i }) => {

    // const brands = FilTERBRAND.filter((el) => {
    //     return el.isEnable === true
    // })

    // console.log(brands)

  return (
    <>
      <GridItem
        bgColor="#fff"
        key={prod.id}
        onMouseOver={() => {
          prod.carause = true;
        }}
        onMouseOut={() => {
          prod.carause = false;
        }}
      >
        <Box>
          <Box position="relative">
            <Image src={prod.images[0]} alt={prod.brand} />
            {/* <Box h="30px" display="none" _hover={{display: "block"}}></Box> */}
            <Flex
              fontSize="14px"
              width="fit-content"
              position="absolute"
              bottom="9px"
              left="10px"
              bgColor="rgba(255, 255, 255, 0.5)"
              pr="3px"
            >
              <Flex align="center">
                <Box ml="10px" mr="3px" fontWeight="600">
                  {prod.rating.star}
                </Box>
                <StarIcon color="teal.500" fontSize="12px" />
              </Flex>
              <Box ml="5px">
                |{" "}
                {prod.rating.count >= 1000
                  ? Math.ceil(prod.rating.count / 1000) + "k"
                  : prod.rating.count}
              </Box>
            </Flex>
          </Box>
          <Box p="10px">
            {prod.carause ? (
              <Box></Box>
            ) : (
              <Box>
                <Heading size="sm" fontSize="16px" noOfLines="1">
                  {prod.brand}
                </Heading>
                <Text
                  fontSize="13px"
                  fontWeight="400"
                  noOfLines={1}
                  color="#84838c"
                >
                  {prod.name}
                </Text>
              </Box>
            )}

            <Flex align="center">
              <Heading size="sm" fontSize="12px" mr="10px">
                Rs. {prod.price}
              </Heading>
              <Box fontSize="12px" mr="10px">
                <s>Rs. {prod.mrp}</s>
              </Box>
              <Box fontSize="12px" color="orange.400">
                ({prod.discount}% OFF)
              </Box>
            </Flex>
          </Box>
        </Box>
      </GridItem>
    </>
  );
};

export default SingleProduct;
