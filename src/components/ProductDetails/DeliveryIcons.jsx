import { Box, Flex} from '@chakra-ui/react'
import React from 'react'

const DeliveryIcons = ({deliveryIcon, deliveryText}) => {
  return (
    <Flex align="center">
        <Box mr="10px">{deliveryIcon}</Box>
        <Box>{deliveryText}</Box>
    </Flex>
  )
}

export default DeliveryIcons