import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { DeliveryContext } from "../../../contexts/DeliveryContext";
import HeadingAndPrices from "./HeadingAndPrices";
import PriceBoxHeading from "./PriceBoxHeading";
import PinkButton from "./PinkButton";

const PriceDetails = ({ enableBtn = true, newBtn="" }) => {
  const { cart } = useContext(DeliveryContext);

  const [totalMrp, setTotalMrp] = useState(0);

  const [totalDiscount, setTotalDiscount] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    findMrp(cart);
    findDiscount(cart);
    findPrice(cart);
  }, [cart]);

  const findMrp = (cart) => {
    const Mrp = cart.reduce((acc, el) => {
      return acc + el.mrp * el.qty;
    }, 0);

    setTotalMrp(Mrp);
  };

  const findDiscount = (cart) => {
    const discount = cart.reduce((acc, el) => {
      return acc + (el.mrp - el.price) * el.qty;
    }, 0);

    setTotalDiscount(discount);
  };

  const findPrice = (cart) => {
    const discount = cart.reduce((acc, el) => {
      return acc + el.price * el.qty;
    }, 0);

    setTotalPrice(discount);
  };

  return (
    <Box>
      <PriceBoxHeading headText={`PRICE DETAILS (${cart.length} items)`} />
      <Box borderBottom="1px" borderColor="gray.300" pb="15px">
        <HeadingAndPrices priceType={"Total MRP"} price={totalMrp} />
        <HeadingAndPrices
          priceType={"Coupon Discount"}
          price={totalDiscount}
          color={"green"}
        />
        <HeadingAndPrices
          priceType={"Convienience Fee"}
          price={"FREE"}
          color={"green"}
        />
      </Box>
      <Box>
        <HeadingAndPrices
          priceType={"Total Amount"}
          price={totalPrice}
          fweight={"700"}
        />
      </Box>
      <Box>
        {enableBtn ? (
          <PinkButton
            width={"100%"}
            btnText={"PROCEED TO PAYMENT"}
            mt={"20px"}
            link={cart.length === 0 ? "" : "/payment"}
            fs={"15px"}
            disabled={cart.length === 0}
          />
        ) : (
           newBtn 
        )}
      </Box>
    </Box>
  );
};

export default PriceDetails;
