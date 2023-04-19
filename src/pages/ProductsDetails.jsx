import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BreadcrumbComponent from "../components/ProductDetails/BreadcrumbComponent";
import ImagesCompo from "../components/ProductDetails/ImagesCompo";
import axios from "axios";
import ProductsDescription from "../components/ProductDetails/ProductDescription";
import ProductsGrid from "../components/Products/ProductsGrid";
import LargeWithAppLinksAndSocial from "../components/Footer";
import IconHeading from "../components/ProductDetails/IconHeading";
import Navbar from "../components/Navbar";

const ProductsDetails = () => {
  const [singleData, setSingleData] = useState({});
  const [data, setData] = useState();
  const { categ, id } = useParams();

  useEffect(() => {
    fetchById(id);
    fetchBycateg();
  }, []);

  const setTotalProducts = () => {
    return;
  };

  const fetchById = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PRODUCTS}/products/${id}`
      );
      response?.data && setSingleData(response.data);
    } catch (err) {
      console.log("err:", err);
    }
  };

  const fetchBycateg = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PRODUCTS}/products?page=2&limit=20`
      );
      response?.data && setData(response.data);
    } catch (err) {
      console.log("err:", err);
    }
  };

  return (
    <>
      <Navbar />
      <Box ml="2.5%" mr="2.5%">
        <BreadcrumbComponent id={id} categ={categ} singleData={singleData} />
        {/* Product Details */}
        <Box display="flex">
          <Box w={{ lg: "60%", md: "60%", sm: "50%", base: "30%" }} mt="30px">
            <ImagesCompo
              singleData={singleData}
              setSingleData={setSingleData}
            />
          </Box>
          <Box w={{ lg: "40%", md: "40%", sm: "50%", base: "70%" }} mt="30px">
            <ProductsDescription
              singleData={singleData}
              fetchById={fetchById}
            />
          </Box>
        </Box>
        <Box ml="2.5%" mt="40px">
          <IconHeading headText={"SIMILAR PRODUCTS"} />
        </Box>
        <ProductsGrid data={data} />
        <LargeWithAppLinksAndSocial />
      </Box>
    </>
  );
};

export default ProductsDetails;
