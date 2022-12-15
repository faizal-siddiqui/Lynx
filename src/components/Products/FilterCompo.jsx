import { Checkbox, filter, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import InputSearch from "./InputSearch";
import ProductsGrid from "./ProductsGrid";
import { filterAdd, PriceFilter, DiscountFilter, AboveRatingFilter } from "./Filter";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const FilterCompo = ({ FilTER, label }) => {
  const { data, setData } = useContext(DataContext);
  

  const ChangeFilterCheckbox = (e, i, el) => {
    FilTER[i].isEnable = e.target.checked;
    const filters = FilTER.filter((el) => {
      return el.isEnable === true;
    });
    
    const brands = filters.map((el) => {
      return el.brand;
    });
    
    if (el.brand) {
      console.log(el.brands)
      filterAdd(brands, setData);
    } else if(el.min && el.max){
      PriceFilter(el.min, el.max, setData)
    } else if (el.above) {
      DiscountFilter(el.above, setData)
    } else if (el.aboveRating) {
      AboveRatingFilter(el.aboveRating, setData)
    }

    
  };

  return (
    <Stack ml="20px">
      <Text fontSize="17px" fontWeight="bold">
        {label}
      </Text>
      {label === "Brand" ? <InputSearch /> : ""}

      {FilTER.map((el, i) => (
        <Flex key={Math.random() * Math.random() * 0.001 * 0.004}>
          <Checkbox
            onChange={(e) => ChangeFilterCheckbox(e, i, el)}
            colorScheme="pink"
            mr="10px"
          ></Checkbox>

          {el.brand ? (
            <Text>{el.brand}</Text>
          ) : el.min && el.max ? (
            <Text>
              ₹ {el.min} to {el.max}{" "}
            </Text>
          ) : el.above ? (
            <Text>Above {el.above}%</Text>
          ) : el.aboveRating ? (
            <Text>Above {el.aboveRating}</Text>
          ) : (
            ""
          )}
        </Flex>
      ))}
    </Stack>
  );
};

export default FilterCompo;
