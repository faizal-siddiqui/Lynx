import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useBoolean,
} from "@chakra-ui/react";

import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

import SingleProduct from "./SingleProduct";

import axios from "axios";
import SkeletonCompo from "./SkeletonCompo";
import { Link as RouterLink, useParams } from "react-router-dom";

const ProductsGrid = ({ data }) => {

  const [loading, setLoading] = useState(true);
  const { categ } = useParams();

  setTimeout(() => {
    setLoading(false)
  },1000)

  return (
    <Grid
      templateColumns={{
        lg: "repeat(4, 1fr)",
        md: "repeat(3, 1fr)",
        sm: "repeat(2, 1fr)",
      }}
      gap={5}
      mr="20px"
      ml="20px"
      pt="20px"
      pb="20px"
    >
      {loading ? (
        <SkeletonCompo />
      ) : (
        data &&
        data.map((prod, i) => (
          <RouterLink to={`/products/${categ}/${prod.id}`}>
            <SingleProduct key={prod.id} prod={prod} i={i} />
          </RouterLink>
        ))
      )}
    </Grid>
  );
};

export default ProductsGrid;
