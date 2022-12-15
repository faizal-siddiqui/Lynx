import { InfoOutlineIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

// const {data, setData} = useContext(DataContext)

export const filterAdd = (filter, setData) => {
  const ans = filter.map((el) => {
    return `brand=${el}`
  });
  console.log("ans", ans.join("&"));
  productsFetch(setData, ans.join("&"));
};


export const PriceFilter = (min, max, setData) => {

  console.log("min")
}

export const DiscountFilter = (discount, setData) => {
  console.log("discount")
}

export const AboveRatingFilter = (rating, setData) => {
  console.log("rating")
}

export const productsFetch = async (setData, ans, Price, Discount, Rating) => {
  // ans.join("&")
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_PRODUCTS}/products?${ans}${Price}${Discount}${Rating}`
    );
    console.log(response);
    setData(response.data);
  } catch (err) {
    console.log("err:", err);
  }
};
