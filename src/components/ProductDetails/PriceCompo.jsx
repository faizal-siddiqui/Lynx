import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const PriceCompo = ({singleData}) => {
  return (
    <Flex fontSize="20px" align="center">
        <Box mr="15px"><Heading fontSize="22px" >₹{singleData?.price}</Heading></Box>
        <Box mr="15px">MRP <s>₹{singleData?.mrp}</s></Box>
        <Box color="orange.400"><b>({singleData?.discount}% OFF)</b></Box>
    </Flex>
  )
}

export default PriceCompo