import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import LargeWithAppLinksAndSocial from "../components/Footer";
import Breadcrumb from "../components/Products/BreadcrumbCompo";
import ProductsCompo from "../components/Products/ProductsCompo";

const Products = () => {
  const { categ } = useParams();

  return (
    <Box>
      {/* BreadCrumb */}
      <Breadcrumb categ={categ} />

      <Text ml="15px"><span fontWeight="bold">Men T-shirts - </span>{} items</Text>

      {/* Products */}
      <ProductsCompo />
      
    </Box>
  );
};

export default Products;
