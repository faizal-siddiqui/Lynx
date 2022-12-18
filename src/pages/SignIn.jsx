import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import SignInForm from "../components/SignIn/SignInForm";

const SignIn = () => {
  return (
    <Box>
      <Navbar />
      <Box>
        <SignInForm />
      </Box>
    </Box>
  );
};

export default SignIn;
