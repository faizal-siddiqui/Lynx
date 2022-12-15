import { Box, GridItem, Image, Grid } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const CategoryGrid = ({ images }) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(6, 1fr)",
        lg: "repeat(6, 1fr)",
        md: "repeat(3, 1fr)",
        sm: "repeat(2, 1fr)",
        // xs: "repeat(2, 1fr)",
      }}
    >
      {images.map((img) => (
        <RouterLink to="">
          <GridItem>
            <Image src={img} alt="" />
          </GridItem>
        </RouterLink>
      ))}
    </Grid>
  );
};

export default CategoryGrid;
