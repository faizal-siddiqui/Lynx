import { Box, GridItem, Image, Grid } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const ImageGrid = ({ images }) => {
  return (
    <Grid
        templateColumns={{
        base: "repeat(10, 1fr)",
        lg: "repeat(10, 1fr)",
        md: "repeat(5, 1fr)",
        sm: "repeat(3, 1fr)",
        // xs: "repeat(2, 1fr)",
      }}
    >
      {images.map((img) => (
        <RouterLink to="" key={Math.random()*Math.random()*0.001*0.004*0.08}>
          <GridItem>
            <Image src={img} alt="" />
          </GridItem>
        </RouterLink>
      ))}
    </Grid>
  );
};

export default ImageGrid;
