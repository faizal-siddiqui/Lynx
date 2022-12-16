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
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import AllFIlter from "./AllFIlter";
import {
  FilTERBRAND,
  FilTERPRICE,
  FILTERDISCOUNT,
  FilTERRATING,
} from "./ProductsData";
import ProductsGrid from "./ProductsGrid";
import LargeWithAppLinksAndSocial from "../Footer";

const ProductsCompo = () => {
  const { data, setData, page, setPage, limit, setLimit } =
    useContext(DataContext);
  const [totalProducts, setTotalProducts] = useState(1);
  console.log("totalProducts:", totalProducts);

  const handleLimit = (e) => {
    setLimit(+e.target.value);
  };

  return (
    <Box>
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
          <Box borderTop="1px" borderColor="gray.200">
            <Flex margin="auto" my="50px" w="fit-content">
              {[...Array(Math.ceil(totalProducts / limit))]
                .fill(0)
                .map((el, i) => (
                  <Button
                    _disabled={{bgColor:"black"}}
                    disabled={page===i+1}
                    color={page == i + 1 ? "#fff" : ""}
                    onClick={() => setPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                ))}
              <Select onChange={handleLimit} placeholder="Select Limit">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </Select>
            </Flex>
            <Box fontSize="14px" color="gray.600" ml="20px" my="30px">Page {page} of {Math.ceil(totalProducts / limit)}</Box>
            {/* <Text fontFamily="Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif">huyhhhhhhhhhhh</Text> */}
          </Box>
        </Box>
      </Box>
      <LargeWithAppLinksAndSocial limit={limit}  />
    </Box>
  );
};

export default ProductsCompo;
