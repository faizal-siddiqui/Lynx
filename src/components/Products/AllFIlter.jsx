import React from "react";
import { Box } from "@chakra-ui/react";
import {
  FilTERBRAND,
  FilTERPRICE,
  FILTERDISCOUNT,
  FilTERRATING,
} from "./ProductsData";
import FilterCompo from "./FilterCompo";

const AllFIlter = () => {
  const AllFILTER = [
    {
      label: "Brand",
      FILTER: FilTERBRAND,
    },
    {
      label: "Price",
      FILTER: FilTERPRICE,
    },
    {
      label: "Discount",
      FILTER: FILTERDISCOUNT,
    },
    {
      label: "Rating",
      FILTER: FilTERRATING,
    },
  ];
  return (
    <Box
      w={{ lg: "25%", md: "100%", sm: "100%" }}
      h="100vh"
      bgColor="#fff"
      display="flex"
      flexDirection={{ lg: "column", md: "row", sm: "row" }}
    >
      {AllFILTER.map((el) => (
        <Box
          key={Math.random()*Math.random()*0.001*0.004}
          w="100%"
          border="1px"
          borderColor="gray.200"
          borderBottom="0px solid red"
          overflow={{ lg: "visible", md: "scroll-y", sm: "scroll" }}
          padding={{lg:"15px", md: "12px", sm: "4px"}}
        >
          <FilterCompo FilTER={el.FILTER} label={el.label} />
        </Box>
      ))}
    </Box>
  );
};

export default AllFIlter;
