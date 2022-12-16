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
import ImageCarausel from "./ImageCarausel";
import SingleProduct from "./SingleProduct";
import { productsFetch } from "./Filter";
import { DataContext } from "../../contexts/DataContext";
import axios from "axios";
import SkeletonCompo from "./SkeletonCompo";
import { Link as RouterLink, useParams } from "react-router-dom";

const ProductsGrid = ({ page, limit, setTotalProducts }) => {
  const { data, setData } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const { categ } = useParams();

  const productsFetch = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PRODUCTS}/products?_limit=${limit}&_page=${page}`
      );
      setTotalProducts(response.headers["x-total-count"]);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      console.log("err:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    productsFetch(page);
  }, [page, limit]);

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
