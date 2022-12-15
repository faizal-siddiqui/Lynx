import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Heading,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AllFIlter from "./AllFIlter";
import {
  FilTERBRAND,
  FilTERPRICE,
  FILTERDISCOUNT,
  FilTERRATING,
} from "./ProductsData";
import ProductsGrid from "./ProductsGrid";

const ProductsCompo = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [totalProducts, setTotalProducts] = useState(1);
  console.log("totalProducts:", totalProducts);

  const handleLimit = (e) => {
    setLimit(+e.target.value)
  }

  return (
    <Box
      mt="30px"
      display="flex"
      flexDirection={{ lg: "row", md: "column", sm: "column" }}
    >
      {/* AllFilter */}
      <AllFIlter />

      <Box
        w={{ lg: "80%", md: "100%", sm: "100%" }}
        border="1px"
        borderColor="gray.200"
      >
        {/* Products Grid */}
        <ProductsGrid
          page={page}
          limit={limit}
          setTotalProducts={setTotalProducts}
        />
        <Box margin="auto" mt="20px" mb="20px" w="fit-content">
          <Flex>
          {[...Array(Math.ceil(totalProducts / limit))].fill(0).map((el, i) => (
            <Button bgColor={page == i+1 ? "black":"gray"} onClick={() => setPage(i + 1)}>{i + 1}</Button>
          ))}
          <Select onChange={handleLimit} placeholder="Select Limit">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </Select>
          </Flex>
          {/* <Text fontFamily="Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif">huyhhhhhhhhhhh</Text> */}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsCompo;
