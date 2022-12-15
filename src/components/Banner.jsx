import React from "react";
import {Box, Image} from "@chakra-ui/react"
import {Link as RouterLink} from "react-router-dom"
const Banner = ({image}) => {
  return <Box w="95%" m="auto">
    <RouterLink to=""><Image src={image} alt="" /></RouterLink>
  </Box>
};

export default Banner;
