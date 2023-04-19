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
import React, { useEffect, useState } from "react";
import ProductsGrid from "./ProductsGrid";
import LargeWithAppLinksAndSocial from "../Footer";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const getPageNumber = (page) => {
  let pageNumber = +page;

  if (pageNumber < 0 || typeof pageNumber != "number") {
    pageNumber = 1;
  }

  if (!pageNumber) {
    pageNumber = 1;
  }

  return pageNumber;
};

const getLimitNumber = (limit) => {
  let limitNumber = +limit;

  if (limitNumber < 0 || typeof limitNumber != "number") {
    limitNumber = 20;
  }

  if (!limitNumber) {
    limitNumber = 20;
  }

  return limitNumber;
};

const ProductsCompo = () => {
  const [data, setData] = useState([]);
  // console.log('data:', data)
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(getPageNumber(searchParams.get("page")));
  const [limit, setLimit] = useState(getLimitNumber(searchParams.get("limit")));

  const [discount, setDiscount] = useState(0);
  const [discountObj, setDiscountObj] = useState({});

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  const [totalProducts, setTotalProducts] = useState(1);
  const [loading, setLoading] = useState(false);

  const [priceObj, setPriceObj] = useState({});

  const [filterObj, setFilterObj] = useState({});
  const [filterStr, setFilterStr] = useState("");

  const getUrl = (url, updatedStr) => {
    let newUrl = "";
    if (url && updatedStr) {
      newUrl = `${url}${updatedStr}`;
    } else {
      newUrl = url;
    }

    return newUrl;
  };

  useEffect(() => {
    setSearchParams({ page, limit });
  }, [page, limit]);

  useEffect(() => {
    productsFetch();
  }, [filterStr, minPrice, discount, page, limit]);

  const productsFetch = () => {
    const updatedUrl = getUrl(
      `${process.env.REACT_APP_PRODUCTS}/products?_page=${page}&_limit=${limit}&price_gte=${minPrice}&price_lte=${maxPrice}&discount_gte=${discount}`,
      filterStr
    );

    setLoading(true);
    axios
      .get(updatedUrl)
      .then((response) => {
        setTotalProducts(response.headers["x-total-count"]);
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => console.log("err:", err))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLimit = (e) => {
    setLimit(+e.target.value);
  };

  const checkDiscount = (disc, isEnable) => {
    let obj = { ...discountObj };
    obj[disc] = isEnable;

    let max = -1;
    for (let key in obj) {
      if (obj[key]) {
        if (+key > max) {
          max = Number(key);
        }
      }
    }

    setDiscountObj(obj);
    if (max == -1) {
      setDiscount(0);
    } else {
      setDiscount(max);
    }
  };

  const checkPrice = (pri, isEnable) => {
    let obj = { ...priceObj };
    obj[pri] = isEnable;
    let max = -1;
    for (let key in obj) {
      if (obj[key]) {
        if (+key > max) {
          max = Number(key);
        }
      }
    }
    setPriceObj(obj);

    if (max == -1) {
      setMinPrice(0);
      setMaxPrice(5000);
    } else {
      if (max == "149") {
        setMinPrice(149);
        setMaxPrice(499);
      } else if (max == "500") {
        setMinPrice(500);
        setMaxPrice(999);
      } else if (max == "1000") {
        setMinPrice(1000);
        setMaxPrice(1499);
      } else if (max == "1500") {
        setMinPrice(1500);
        setMaxPrice(10000);
      }
    }
  };

  const filterCheckBox = (e) => {
    if (
      e.target.name == 149 ||
      e.target.name == 500 ||
      e.target.name == 1000 ||
      e.target.name == 1500
    ) {
      checkPrice(e.target.name, e.target.checked);
    } else if (
      e.target.name == 25 ||
      e.target.name == 50 ||
      e.target.name == 75 ||
      e.target.name == 90
    ) {
      checkDiscount(e.target.name, e.target.checked);
    } else {
      let name = e.target.name;
      let enable = e.target.checked;
      let obj = { ...filterObj };
      let filterstring = "";
      obj[name] = enable;

      for (let key in obj) {
        if (obj[key]) {
          filterstring += `&brand=${key}`;
        }
      }
      // console.log(e.target.checked);
      setFilterStr(filterstring);
      setFilterObj(obj);
    }
  };

  return (
    <Box>
      <Text ml="15px">
        <span fontWeight="bold">Men T-shirts - </span>
        {data.length} items
      </Text>
      <Box
        mt="30px"
        display="flex"
        flexDirection={{
          lg: "row",
          md: "column",
          sm: "column",
          base: "column",
        }}
      >
        {/* AllFilter */}
        <Box
          w={{ lg: "25%", md: "100%", sm: "100%" }}
          h="auto"
          bgColor="#fff"
          display="flex"
          flexDirection={{ lg: "column", md: "row", sm: "row", base: "row" }}
          mb={data?.length == 0 ? "30px" : data.length < 5 ? "30px" : "0px"}
        >
          <Box
            w="100%"
            border="1px"
            borderColor="gray.200"
            borderBottom="0px solid red"
            overflow={{
              lg: "visible",
              md: "scroll-y",
              sm: "scroll",
              base: "scroll",
            }}
            padding={{ lg: "15px", md: "12px", sm: "4px", base: "1px" }}
          >
            <Flex direction={{ lg: "column", md: "row", sm: "row" }}>
              <Stack ml="20px">
                <Text
                  mt="15px"
                  fontSize={{
                    lg: "17px",
                    md: "16px",
                    sm: "15px",
                    base: "14px",
                  }}
                  fontWeight="bold"
                >
                  FILTER BY BRANDS
                </Text>

                <Checkbox
                  name="Allen Solly"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    Allen Solly
                  </Text>
                </Checkbox>
                <Checkbox
                  name="HIGHLANDER"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    HIGHLANDER
                  </Text>
                </Checkbox>
                <Checkbox
                  name="Louis Philippe Sport"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    Louis Philippe Sport
                  </Text>
                </Checkbox>
                <Checkbox
                  name="HRX by Hrithik Roshan"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    HRX by Hrithik Roshan
                  </Text>
                </Checkbox>
                <Checkbox
                  name="Huetrap"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    Huetrap
                  </Text>
                </Checkbox>
                <Checkbox
                  name="Roadster"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    Roadster
                  </Text>
                </Checkbox>
                <Checkbox
                  name="Urbano Fashion"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    Urbano Fashion
                  </Text>
                </Checkbox>
                <Checkbox
                  name="Peter England Casuals"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    Peter England Casuals
                  </Text>
                </Checkbox>
                <Checkbox
                  name="WROGN"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    WROGN
                  </Text>
                </Checkbox>
                <Checkbox
                  name="H&M"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    H&M
                  </Text>
                </Checkbox>
                <Checkbox
                  name="Rodzen"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    Rodzen
                  </Text>
                </Checkbox>
                <Checkbox
                  name="t-base"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    t-base
                  </Text>
                </Checkbox>
                <Checkbox
                  name="Bewakoof"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    Bewakoof
                  </Text>
                </Checkbox>
                <Checkbox
                  name="Nautica"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    Nautica
                  </Text>
                </Checkbox>
                <Checkbox
                  name="Force NXT"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    Force NXT
                  </Text>
                </Checkbox>
                <Checkbox
                  name="Levis"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    Levis
                  </Text>
                </Checkbox>
              </Stack>
              <Stack ml="20px">
                <Text
                  mt="15px"
                  fontSize={{
                    lg: "17px",
                    md: "16px",
                    sm: "15px",
                    base: "14px",
                  }}
                  fontWeight="bold"
                >
                  FILTER BY PRICE
                </Text>

                <Checkbox
                  name="149"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    ₹ 149 - ₹499
                  </Text>
                </Checkbox>
                <Checkbox
                  name="500"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    ₹ 500 - ₹999
                  </Text>
                </Checkbox>
                <Checkbox
                  name="1000"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    ₹ 1000 - ₹1499
                  </Text>
                </Checkbox>
                <Checkbox
                  name="1500"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    ₹ 1500 - Above
                  </Text>
                </Checkbox>
              </Stack>
              <Stack ml="20px">
                <Text
                  mt="15px"
                  fontSize={{
                    lg: "17px",
                    md: "16px",
                    sm: "15px",
                    base: "14px",
                  }}
                  fontWeight="bold"
                >
                  FILTER BY DISCOUNT
                </Text>

                <Checkbox
                  name="25"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    25% and above
                  </Text>
                </Checkbox>
                <Checkbox
                  name="50"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    50% and above
                  </Text>
                </Checkbox>
                <Checkbox
                  name="75"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    75% and above
                  </Text>
                </Checkbox>
                <Checkbox
                  name="90"
                  onChange={filterCheckBox}
                  colorScheme="pink"
                  size={{ lg: "md", md: "md", sm: "md", base: "sm" }}
                  mr="10px"
                >
                  <Text
                    fontSize={{
                      lg: "16px",
                      md: "15px",
                      sm: "12px",
                      base: "11px",
                    }}
                  >
                    90% and above
                  </Text>
                </Checkbox>
              </Stack>
            </Flex>
          </Box>
        </Box>

        <Box
          w={{ lg: "80%", md: "100%", sm: "100%" }}
          border="1px"
          borderColor="gray.200"
        >
          {/* Products Grid */}
          <ProductsGrid data={data} />
          <Box borderTop="1px" borderColor="gray.200">
            <Flex margin="auto" my="50px" w="fit-content">
              {[...Array(Math.ceil(totalProducts / limit))]
                .fill(0)
                .map((el, i) => (
                  <Button
                    key={i * Math.random() * 0.6755}
                    _disabled={{ bgColor: "black" }}
                    disabled={page === i + 1}
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
            <Box fontSize="14px" color="gray.600" ml="20px" my="30px">
              Page {page} of {Math.ceil(totalProducts / limit)}
            </Box>
            {/* <Text fontFamily="Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif">huyhhhhhhhhhhh</Text> */}
          </Box>
        </Box>
      </Box>
      <LargeWithAppLinksAndSocial limit={limit} />
    </Box>
  );
};

export default ProductsCompo;
