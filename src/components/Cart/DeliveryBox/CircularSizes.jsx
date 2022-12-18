import { Box } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { DeliveryContext } from "../../../contexts/DeliveryContext";
import { changeQty, changeSize, editQty } from "./EditCart";

const CircularSizes = ({ content, data, el, setSize}) => {

  const { profileId, setProfileId, setCart, cart, fetchCart, profileData } = useContext(DeliveryContext)

  const sizechange = (content) => {
    if (typeof content == "number") {
      const newData = changeQty(data, el, content);
      editQty(newData);
      setSize(content)
      setTimeout(() => {
        fetchCart()
      }, 250)
    } else if (typeof content == "string") {
      const newData = changeSize(data, el, content);
      editQty(newData);
      setSize(content)
      setTimeout(() => {
        fetchCart()
      }, 250)
    }
  };

  return (
    <Box
      onClick={() => sizechange(content)}
      w="40px"
      h="40px"
      borderRadius="50%"
      cursor="pointer"
      justifyContent="center"
      display="flex"
      alignItems="center"
      border="1px"
      borderColor="black"
      _hover={{ borderColor: "red", color: "red" }}
    >
      <Box>{content}</Box>
    </Box>
  );
};

export default CircularSizes;
