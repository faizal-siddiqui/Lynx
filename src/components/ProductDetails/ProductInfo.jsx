import { Box, Text } from "@chakra-ui/react";
import React from "react";
// import ProductsDetails from "../../pages/ProductsDetails";
import ProductInfoCompo from "./ProductInfoCompo";
import Specification from "./Specification";

const ProductInfo = ({ productDetails, size, material, specification }) => {

  return (
    <Box>
      <Text mb="15px" fontWeight="600" mr="10px">
        PRODUCT DETAILS
      </Text>

      <ProductInfoCompo headText={""} innerText={productDetails} />
      <ProductInfoCompo headText={"Size & Fit"} innerText={size} />
      <ProductInfoCompo headText={"Material & Care"} innerText={material} />

      <Specification heading={"Specification"} specification={specification} />
    </Box>
  );
};

export default ProductInfo;
