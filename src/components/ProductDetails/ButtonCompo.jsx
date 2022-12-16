import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import {Link as RouterLink} from "react-router-dom"

const ButtonCompo = () => {
  return (
    <Box mt="30px">
      <RouterLink to='/cart'>
        <Button p="25px" mr="20px" fontSize="17px" bgColor="#ff3e6c" color="#fff">
          <BsHandbag />
          <Text ml="10px">ADD TO BAG</Text>
        </Button>
      </RouterLink>
      <RouterLink>
        <Button p="25px" fontSize="17px" bgColor="#fff" border="1px" borderColor="gray.300">
          <AiOutlineHeart/>
          <Text ml="10px">WISHLIST</Text>
        </Button>
      </RouterLink>
    </Box>
  );
};

export default ButtonCompo;
