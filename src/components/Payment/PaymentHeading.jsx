import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const PaymentHeading = ({headText}) => {
  return (
    <Box>
        <Text color="gray.700" fontSize="16px" fontWeight="700">{headText}</Text>
    </Box>
  )
}

export default PaymentHeading