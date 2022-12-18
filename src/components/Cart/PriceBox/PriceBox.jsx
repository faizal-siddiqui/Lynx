import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import CouponBox from "./CouponBox";
import Gifting from "./Gifting";
import PriceDetails from "./PriceDetails";

const PriceBox = () => {
  return (
    <Box>
      <Stack spacing="30px">
        <Box>
          <CouponBox />
        </Box>
        <Box>
          <Gifting />
        </Box>
        <Box>
          <PriceDetails />
        </Box>
      </Stack>
    </Box>
  );
};

export default PriceBox;
