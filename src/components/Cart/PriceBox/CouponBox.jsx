import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import ColouredButton from "../DeliveryBox/ColouredButton";
import IconHeading from "../DeliveryBox/IconHeading";
import PriceBoxHeading from "./PriceBoxHeading";

const CouponBox = () => {
  return (
    <Flex justify="space-between" borderBottom="1px" borderColor="gray.200">
      <Box pb="10px">
        <Box mb="10px">
          <PriceBoxHeading headText={"COUPONS"} />
        </Box>
        <Box>
          <IconHeading
            icon={<MdOutlineLocalOffer fontSize="20px" />}
            headText={"1 Coupon Applied"}
            pText={"You saved ₹100"}
          />
        </Box>
      </Box>
      <Box>
        <ColouredButton
          color={"red"}
          btnText={"EDIT"}
          hoverColor={"#FDDDE6"}
          padding={"15px"}
          fsize={"14px"}
        />
      </Box>
    </Flex>
  );
};

export default CouponBox;
