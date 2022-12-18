import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import React from "react";
import HeadNameText from "../DeliveryBox/HeadNameText";
import PriceBoxHeading from "./PriceBoxHeading";

const Gifting = () => {
  return (
    <Box borderBottom="1px" borderColor="gray.200" pb="10px">
      <Stack gap={2}>
        <Box>
          <PriceBoxHeading headText={"GIFTING AND PERSONALISATION"} />
        </Box>
        <Box bgColor="#fff1ec">
          <Flex>
            <Box>
              <Image
                h="120px"
                src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp"
                alt=""
              />
            </Box>
            <Box mt="20px" ml="10px">
              <HeadNameText
                headText={"Buying for a loved one?"}
                pText={
                  "Gift wrap and personalized message onm card Only for ₹25"
                }
                colorText={"ADD GIFT WRAP"}
              />
            </Box>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default Gifting;
