import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import LargeWithAppLinksAndSocial from "../components/Footer";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Products/BreadcrumbCompo";
import ProductsCompo from "../components/Products/ProductsCompo";

const Products = () => {
  const { categ } = useParams();

  return (
    <>
      <Navbar />
      <Box>
        {/* BreadCrumb */}
        <Breadcrumb categ={categ} />

        

        {/* Products */}
        <ProductsCompo />
        
      </Box>
    </>
  );
};

export default Products;
