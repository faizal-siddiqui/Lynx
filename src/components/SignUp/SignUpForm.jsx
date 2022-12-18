import { Link, useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useContext } from "react";
import { DeliveryContext } from "../../contexts/DeliveryContext";

export default function SignInForm() {
  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  console.log('email:', email)
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profileData, setProfileData] = useState([]);
  const [profileDataObj, setProfileDataObj] = useState({});
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { profileId, setProfileId } = useContext(DeliveryContext);

  // toast message
  const openToast = (text, status, desc) => {
    toast({
      title: text,
      description: desc,
      status: status,
      isClosable: true,
      position: "top",
    });
  };

  const addDataToApi = () => {
    axios
      .post(`${process.env.REACT_APP_PRODUCTS}/profile`, {
        email: email,
        password: password,
        name: name,
        mobile: 0,
        gender: "",
        birthDate: "",
        location: "",
        cardDetails: "",
        cart: [],
      })
      .then((res) => {
        openToast("YOUR ACCOUNT IS CREATED", "success", "");
        setLoading(false);
        setEmail("");
        setPassword("");
        setName("");
        navigate("/signin");
      })
      .catch((err) => console.log(err));
  };

  // for comparing the website data with the typed data
  const compareData = (data) => {
    setTimeout(() => {
      if (data && data[0] && data[0].email === email) {
        openToast("USER ALREADY EXIST", "error", "");
        setLoading(false);
        setName("")
        setEmail("");
        setPassword("");
        ;
      } else {
        addDataToApi();
      }
    }, 3000);
  };

  // getting data from api
  const checkDataFromApi = () => {
    setLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTS}/profile?email=${email}&password=${password}`
      )
      .then((res) => {
        setProfileData(res.data);
        compareData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  /// for submitting form and checking data from api
  const submitForm = () => {
    setProfileDataObj({
      email: email,
      password: password,
      name: name,
      mobile: 0,
      gender: "",
      birthDate: "",
      location: "",
      cardDetails: "",
      cart: [],
    });
    setTimeout(() => {
      checkDataFromApi();
    }, 1000);
  };

  // for handling email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // for handling Password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // for handling Name
  const handleName = (e) => {
    setName(e.target.value);
  };

  const colorMode = useColorModeValue("white", "gray.700");

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bgGradient={"linear(to-r, teal.100, pink.200)"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading
            bgGradient="linear(to-l, teal.400, pink.400)"
            bgClip="text"
            fontSize={"4xl"}
          >
            Sign in to your account
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}></Text>
        </Stack>
        <Box rounded={"lg"} bg={colorMode} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="firstName" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                isDisabled={loading}
                value={name}
                isRequired
                name="name"
                onChange={handleName}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                isDisabled={loading}
                value={email}
                isRequired
                autoComplete="email"
                name="email"
                onChange={handleEmail}
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  isDisabled={loading}
                  value={password}
                  autoComplete="current-password"
                  isRequired
                  onChange={handlePassword}
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement>
                  <Text bgColor="#fff" size="sm" onClick={handleClick}>
                    {show ? <ViewOffIcon /> : <ViewIcon />}
                  </Text>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                isLoading={loading}
                onClick={() => submitForm()}
                bg={"#ff3e6c"}
                color={"white"}
                _hover={{
                  bg: "#ff3e6c",
                }}
              >
                Sign in
              </Button>
              <Flex>
                <Text mr={"5px"}>Didn't have an Account?</Text>
                <Link to="/signup">
                  <Text color="blue.400" cursor="pointer">
                    {" "}
                    SignUp
                  </Text>
                </Link>
              </Flex>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
