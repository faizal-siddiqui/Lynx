import React from "react";
import DeliveryModal from "./DeliveryModal";
import PriceCompo from "../../ProductDetails/PriceCompo";
import { tomorrow } from "../../ProductDetails/RandomDate";
import { TiTick } from "react-icons/ti";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { CloseButton } from "@chakra-ui/react";
import { removeCartData, editQty } from "./EditCart";
import { useContext } from "react";
import { DeliveryContext } from "../../../contexts/DeliveryContext";
import HeadNameText from "./HeadNameText";

const SingleCartBox = ({ cart }) => {
  const { fetchCart } = useContext(DeliveryContext);

  const removeCartDataFunc = (cart, el) => {
    const newData = removeCartData(cart, el);
    editQty(newData);
    setTimeout(() => {
      fetchCart();
    }, 150);
  };

  return (
    <Box>
      {cart &&
        cart.map((el) => (
          <Box position="relative" key={el.id} mt="10px">
            <Flex align="center" border="1px" borderColor="gray.200">
              <Image w="26%" p="10px" src={el.images[0]} alt={el.brand} />
              <Box pl="10px" mb="10px">
                <Box mb="7px">
                  <HeadNameText headText={el.brand} pText={el.name} />
                </Box>
                <Flex gap="10px">
                  <DeliveryModal
                    data={cart}
                    el={el}
                    SIZES={SIZES}
                    modalText={"SIZE"}
                    stateVar={el.sizes}
                    modalHeading={"Select Size"}
                  />
                  <DeliveryModal
                    data={cart}
                    el={el}
                    SIZES={QTY}
                    modalText={"QTY"}
                    stateVar={el.qty}
                    modalHeading={"Select Quantity"}
                  />
                </Flex>
                <Box my="2%">
                  <PriceCompo singleData={el} fsize="13px" mr={"10px"} />
                </Box>
                <Flex align="center">
                  <TiTick color="green" />
                  <Flex fontSize="13px" align="center">
                    <Text mr="5px"> Deliver by:</Text>
                    <Text fontWeight="bold"> {tomorrow()}</Text>
                  </Flex>
                </Flex>
              </Box>
              <Box position="absolute" right="8px" top="5px">
                <CloseButton
                  onClick={() => {
                    removeCartDataFunc(cart, el);
                  }}
                />
              </Box>
            </Flex>
          </Box>
        ))}
    </Box>
  );
};

export default SingleCartBox;
const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const QTY = [1, 2, 3, 4, 5, 6];
