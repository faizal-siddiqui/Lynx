import React from 'react'
import {Box} from "@chakra-ui/react"
import SignUpForm from "../components/SignUp/SignUpForm" 
import Navbar from '../components/Navbar'

const SignUp = () => {
  return (
    <Box>
      <Navbar />
      <SignUpForm />
    </Box>
  )
}

export default SignUp