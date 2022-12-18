import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const HeadingAndPrices = ({priceType, price, color, fweight = '500'}) => {
  return (
    <Box mt="10px">
        <Flex justify="space-between" align="center">
            <Text fontWeight={fweight} fontSize="14px" color="gray.600">{priceType}</Text>
            <Text fontWeight={fweight} fontSize="14px" color={color}>₹ {price}</Text>
        </Flex>
    </Box>
  )
}

export default HeadingAndPrices