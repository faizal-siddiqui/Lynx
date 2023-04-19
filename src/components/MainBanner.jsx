import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
const MainBanner = ({ image }) => {
  return (
    <Box w="95%" m="auto" mt="6">
      <RouterLink to="">
        <Image w="100%" src={image} alt="" />
      </RouterLink>
    </Box>
  );
};

export default MainBanner;
