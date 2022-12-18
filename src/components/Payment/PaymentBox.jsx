import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import Offersbox from '../Cart/DeliveryBox/Offersbox'
import PaymentAccordion from './PaymentAccordion'
import PaymentHeading from './PaymentHeading'

const PaymentBox = () => {
  return (
    <Stack spacing={3}>
        <Box p="15px" border='1px' borderColor='gray.200'>
            <Offersbox headingText={"Bank Offer"} pText={"5% unlimited Cashback on FlipKart Axis Bank Credit Card TCA"} />
        </Box>
        <Box>
            <PaymentHeading headText={"Choose Payment Mode"} />
        </Box>
        <Box>
            <PaymentAccordion />
        </Box>
    </Stack>
  )
}

export default PaymentBox