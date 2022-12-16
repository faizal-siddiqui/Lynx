import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import BestOffers from "./BestOffers";
import BrandName from "./BrandName";
import ButtonCompo from "./ButtonCompo";
import DeliveryOptions from "./DeliveryOptions";
import PriceCompo from "./PriceCompo";
import ProductInfo from "./ProductInfo";
import RatingBox from "./RatingBox";
import Review from "./Review";
import Size from "./Size";
import axios from "axios"
import { useParams } from "react-router-dom";

const ProductDescription = ({ singleData, fetchById }) => {
  const {id} = useParams()
  console.log('id:', id)
  // const [review, setReview] = useState([])
  // console.log('review:', review)
  const [prevReview, setPreReview] = useState([])
  console.log('prevReview:', prevReview)
  const [inputReview, setInputReview] = useState([])
  console.log('inputReview:', inputReview)

  useEffect(() => {
    singleData?.reviews && setPreReview(singleData.reviews)
  }, [])

  // Adding Reviews
  const AddReviews = async(id) => {

    const newReviews = [
      ...singleData.reviews, inputReview
    ]

    const response = await axios.patch(`${process.env.REACT_APP_PRODUCTS}/products/${id}`, {
      reviews: newReviews
    })
    fetchById(id)
    // console.log(response)
    setInputReview("")
  }


  const UpdateStar = async(id) => {
    const newRating = {
      ...singleData.rating,
      count: singleData.rating.count + 1
    }

    const response = await axios.patch(`${process.env.REACT_APP_PRODUCTS}/products/${id}`, {
      rating: newRating
    })
    fetchById(id)
    console.log(response)
  }

  return (
    <>
      <Box ml="20px"  pb="15px" borderBottom="1px" borderColor="gray.300">
        <BrandName singleData={singleData} />
      </Box>
      <Box m="20px" pb="15px" borderBottom="1px" borderColor="gray.300">
        <PriceCompo singleData={singleData} />
        <Text fontSize="14px" fontWeight="bold" color="green.400">
          inclusive of all taxes
        </Text>
        <Size singleData={singleData} />
        <ButtonCompo />
      </Box>
      <Box m="20px" pb="15px" borderBottom="1px" borderColor="gray.300">
        <DeliveryOptions />
        <Box>
          <Text color="gray.500">100% Original Products</Text>
        </Box>
      </Box>
      <Box m="20px" pb="15px" borderBottom="1px" borderColor="gray.300">
        <BestOffers />
      </Box>
      <Box m="20px" pb="15px" borderBottom="1px" borderColor="gray.300">
        {singleData && singleData?.productDetails && (
          <ProductInfo
            productDetails={singleData.productDetails}
            size={singleData.size}
            material={singleData.material}
            specification={singleData.specification}
          />
        )}
      </Box>
      <Box m="20px" pb="15px" borderBottom="1px" borderColor="gray.300">
        <RatingBox singleData={singleData} UpdateStar={UpdateStar} />
      </Box>
      <Box m="20px" pb="15px" borderBottom="1px" borderColor="gray.300">
        <Review setInputReview={setInputReview} AddReviews={AddReviews} singleData={singleData} inputReview={inputReview} />
      </Box>
    </>
  );
};

export default ProductDescription;
