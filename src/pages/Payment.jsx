import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import CardFooter from '../components/Cart/CartFooter/CardFooter'
import CartNavbar from '../components/Cart/CartNavbar/CartNavbar'
import PriceDetails from '../components/Cart/PriceBox/PriceDetails'
import PaymentBox from '../components/Payment/PaymentBox'
import SuccessButton from '../components/Payment/SuccessButton'

const Payment = () => {
  return (
    <Box>
      <CartNavbar />
      <Flex
        gap="20px"
        flexDirection={{ lg: "row", md: "column", sm: "column" }}
      >
        <Box
          mt="25px"
          w={{ lg: "65%", md: "80%", sm: "90%" }}
          ml={{ lg: "13%", md: "10%", sm: "5%" }}
        >
          <PaymentBox />
        </Box>
        <Box
          mt="25px"
          p="15px"
          w={{ lg: "35%", md: "80%", sm: "90%" }}
          mr={{ lg: "13%", md: "10%", sm: "5%" }}
          ml={{ lg: "0%", md: "10%", sm: "5%" }}
          border="1px"
          borderColor="gray.200"
        >
          <PriceDetails enableBtn={false} newBtn={<SuccessButton />} />
        </Box>
      </Flex>
      <Box>
        <CardFooter />
      </Box>
    </Box>
  )
}

export default Payment