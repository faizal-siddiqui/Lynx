import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import SpecificationItem from "./SpecificationItem";

const Specification = ({ heading, specification }) => {

  return (
    <Box mt="20px" mb="15px">
      <Text my="15px" fontWeight="600" mr="10px">
        {heading}
      </Text>
      <Grid templateColumns={{lg: "repeat(2, 1fr)" , md: "repeat(1, 1fr)", sm: "repeat(1, 1fr)"}} gap={{lg: "6", md: "6", sm: "5"}}>
        <SpecificationItem
          headText={"Fabric"}
          prodSpecs={specification.fabric}
        />
        <SpecificationItem headText={"Fit"} prodSpecs={specification.fit} />
        <SpecificationItem
          headText={"Length"}
          prodSpecs={specification.length}
        />
        <SpecificationItem
          headText={"Main Trend"}
          prodSpecs={specification.mainTrend}
        />
      </Grid>
    </Box>
  );
};

export default Specification;
