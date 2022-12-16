import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Rating from './Rating'

const BrandName = ({singleData}) => {
console.log('singleData:', singleData)

  return (
    <Box>
        <Heading as="h5" fontSize="25px">{singleData.brand}</Heading>
        <Text size="md">{singleData.name}</Text>
        <Rating singleData={singleData} />
    </Box>
  )
}

export default BrandName