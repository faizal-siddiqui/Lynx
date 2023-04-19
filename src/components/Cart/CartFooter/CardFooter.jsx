import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const CardFooter = () => {
  const margin = { lg: "170px", md: "160px", sm: "100px", base: "20px" };
  return (
    <Box mt="100px" ml={margin} mr={margin}>
      <Flex justify="space-between">
        <Grid
          w="70%"
          templateColumns={{
            lg: "repeat(10, 1fr)",
            md: "repeat(5, 1fr)",
            sm: "repeat(3, 1fr)",
            base: "repeat(4, 1fr)",
          }}
        >
          {FooterImage.map((img) => (
            <GridItem key={Math.random() * 0.6565 * Math.random()}>
              <Image w="80%" src={img} alt="" />
            </GridItem>
          ))}
        </Grid>
        <Text cursor="pointer">Need Help ? Contact Us</Text>
      </Flex>
    </Box>
  );
};

const FooterImage = [
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png",
];

export default CardFooter;
