import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { DeliveryContext } from "../../contexts/DeliveryContext";
import { useEffect } from "react";

const ButtonCompo = ({ singleData }) => {
  const { profileId, cart, fetchCart } = useContext(DeliveryContext);

  useEffect(() => {
    fetchCart();
  }, []);

  // checking item already present or not
  const checkCartIdPresent = (cart, singleData) => {
    let isPresent = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === singleData.id) {
        isPresent = true;
      }
    }
    return isPresent;
  };

  //adding data to the cart
  const addToCart = async (cart, singleData) => {
    if (checkCartIdPresent(cart, singleData)) {
      return true;
    }
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_PRODUCTS}/profile/${profileId}`,
        {
          cart: [...cart, singleData],
        }
      );
    } catch (err) {
      console.log("err:", err);
    }
  };

  return (
    <Box mt="30px">
      <Button
        onClick={() => addToCart(cart, singleData)}
        p={{ lg: "25px", md: "20px", sm: "19px", base: "16px" }}
        mr="20px"
        fontSize={{ lg: "17px", md: "16px", sm: "15px", base: "13px" }}
        bgColor="#ff3e6c"
        color="#fff"
      >
        <BsHandbag />
        <Text ml="10px">
          {checkCartIdPresent(cart, singleData)
            ? "ALREADY PRESENT"
            : "ADD TO BAG"}
        </Text>
      </Button>

      <RouterLink>
        <Button
          mt="10px"
          p={{ lg: "25px", md: "20px", sm: "19px", base: "16px" }}
          mr="20px"
          fontSize={{ lg: "17px", md: "16px", sm: "15px", base: "13px" }}
          bgColor="#fff"
          border="1px"
          borderColor="gray.300"
        >
          <AiOutlineHeart />
          <Text ml="10px">WISHLIST</Text>
        </Button>
      </RouterLink>
    </Box>
  );
};

export default ButtonCompo;
