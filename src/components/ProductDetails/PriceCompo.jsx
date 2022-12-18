import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const PriceCompo = ({singleData, mr ="15px", fsize = "20px"}) => {
  return (
    <Flex fontSize={fsize} align="center">
        <Box mr={mr}><Heading fontSize={fsize} >₹{singleData?.price}</Heading></Box>
        <Box mr={mr}>MRP <s>₹{singleData?.mrp}</s></Box>
        <Box color="orange.400"><b>({singleData?.discount}% OFF)</b></Box>
    </Flex>
  )
}

export default PriceCompo