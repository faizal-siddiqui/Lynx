import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import DeliveryAddress from "./DeliveryAddress";

import Offersbox from "./Offersbox";
import { useEffect } from "react";
import { useState } from "react";
import SingleCartBox from "./SingleCartBox";
import { useContext } from "react";
import { DeliveryContext } from "../../../contexts/DeliveryContext";
import { editQty } from "./EditCart";

const DeliveryBox = () => {
  const [qty, setQty] = useState(1);
  const { profileId, setProfileId, setCart, cart, fetchCart } =
    useContext(DeliveryContext);

    const emptyCart = (emptyArr) => {
      editQty(emptyArr)
      setTimeout(() => {
        fetchCart()
      }, 200)
    }

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <>
      <Stack spacing={3}>
        <Box p="15px" border="1px" borderColor="gray.200">
          <DeliveryAddress />
        </Box>
        <Box p="15px" border="1px" borderColor="gray.200">
          <Offersbox />
        </Box>
        <Box p="15px" border="1px" borderColor="gray.200">
          <Flex align="center">
            <Image
              src={
                "https://constant.myntassets.com/checkout/assets/img/ship-free.webp"
              }
              alt=""
              w="40px"
              mr="10px"
            />
            <Text color="gray" fontSize="13px">
              Yay! No Convience fee on this order
            </Text>
          </Flex>
        </Box>
        <Box p="15px">
          <Flex py="15px" align="center" justify="space-between">
            <Text fontWeight="600">{cart.length} ITEMS SELECTED</Text>
            <Text
              onClick={() => emptyCart([])}
              fontWeight="500"
              fontSize="13px"
              color="#848482"
              cursor="pointer"
            >
              REMOVE ALL
            </Text>
          </Flex>
        </Box>
        <Box p="15px">
          <SingleCartBox cart={cart} />
        </Box>
      </Stack>
    </>
  );
};

export default DeliveryBox;

// const cartItems = {
//   id: 1,
//   name: "Faizal Siddiqui",
//   email: "faizalsidp@gmail.com",
//   mobile: 7867789867,
//   gender: "Male",
//   birthDate: "23-09-2002",
//   location: "Delhi",
//   cardDetails: "89878676565441",
//   password: "Faiz!234",
//   cart: [
//     {
//       carause: false,
//       brand: "United Colors of Benetton",
//       name: "Men Blue Pure Cotton Embroidered Typography T-shirt",
//       rating: {
//         star: 4.5,
//         count: 10,
//       },
//       price: 974,
//       mrp: 1499,
//       discount: 35,
//       productDetails:
//         "Blue Tshirt for men Typography self design Regular length Round neck Short, regular sleeves Knitted cotton fabric",
//       size: 'Regular Fit Size worn by the model: M Chest: 39.7" Height: 6\'1"',
//       material: "100% cotton Machine wash",
//       category: "tshirts",
//       type: "men",
//       specification: {
//         fabric: "Cotton",
//         fit: "Regular Fit",
//         length: "Regular",
//         mainTrend: "Typography or Slogan Print",
//       },
//       images: [
//         "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17784074/2022/8/2/0a3f8aa7-d8ee-49e3-b39e-9fb4c1c45ebe1659420852523-United-Colors-of-Benetton-Men-Tshirts-4861659420852039-4.jpg",
//         "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17784074/2022/8/2/1e8a47ac-920c-4f90-964e-da993fef3e131659420852586-United-Colors-of-Benetton-Men-Tshirts-4861659420852039-1.jpg",
//         "https://assets.myntassets.com/assets/images/17784074/2022/8/2/63f8b9c5-42f3-496c-9edf-483e31a78da51659420852503-United-Colors-of-Benetton-Men-Tshirts-4861659420852039-5.jpg",
//       ],
//       reviews: [],
//       id: 36,
//     },
//   ],
// };
