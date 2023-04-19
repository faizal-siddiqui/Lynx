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
import { useRef } from "react";
import { useToast } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { DeliveryContext } from "../../contexts/DeliveryContext";
import { useEffect } from "react";

export default function SignInForm() {
  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileData, setProfileData] = useState([]);

  const [read, setRead] = useState(true);

  const [profileDataObj, setProfileDataObj] = useState({});
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const { isAuth, setIsAuth } = useContext(AuthContext);

  const { profileId, setProfileId } = useContext(DeliveryContext);

  const [updatedDetails, setUpdatedDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
  });
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

  console.log("updatedDetails:", updatedDetails);

  // patch profile

  const patchProfile = () => {
    const id = JSON.parse(localStorage.getItem("id"));

    if (!id) {
      return;
    }

    axios
      .patch(`${process.env.REACT_APP_PRODUCTS}/profile/${id}`, {
        ...profileData,
        ...updatedDetails,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // checking read if read true -> edit otherwise patch the data

  const changeData = (read) => {
    if (read) {
      setRead(false);
      console.log("updatedDetails:", updatedDetails);
    } else {
      patchProfile();
      setRead(true);
    }
  };

  // for getting profile
  const fetchProfile = () => {
    const id = JSON.parse(localStorage.getItem("id"));

    if (!id) {
      return;
    }

    axios
      .get(`${process.env.REACT_APP_PRODUCTS}/profile?id=${id}`)
      .then((res) => {
        setProfileData(res?.data[0]);
        setUpdatedDetails({
          name: res?.data[0]?.name,
          email: res?.data[0]?.email,
          mobile: res?.data[0]?.mobile,
          gender: res?.data[0]?.gender,
          location: res?.data[0]?.location,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProfile();
    return () => {
      clearTimeout(ref1.current);
      clearTimeout(ref2.current);
    };
  }, []);

  // for comparing the website data with the typed data
  const compareData = (data) => {
    ref1.current = setTimeout(() => {
      if (data && data[0] && data[0].email === email) {
        openToast("LOGIN SUCCESSFUL", "success", "");
        setLoading(false);
        setIsAuth(true);
        setProfileId(data[0].id);
        localStorage.setItem("auth", JSON.stringify(true));
        localStorage.setItem("id", JSON.stringify(data[0].id));
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        openToast("LOGIN FAILED", "error", "Check your Email and Password");
        setLoading(false);
      }
    }, 3000);
  };

  // getting data from api
  const getDataFromApi = () => {
    setLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTS}/profile?email=${email}&password=${password}`
      )
      .then((res) => {
        // setProfileData(res.data);
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
      email,
      password,
    });
    ref2.current = setTimeout(() => {
      getDataFromApi();
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

  const Logout = () => {
    setIsAuth(false);
    setProfileId(0);
    setProfileData([]);
    setProfileDataObj({});
    openToast("LOGOUT SUCCESSFUL", "success", "");
    localStorage.clear();
  };

  const colorMode = useColorModeValue("white", "gray.700");

  return isAuth ? (
    <Box bgGradient={"linear(to-r, teal.100, pink.200)"} h="100vh">
      <Flex m="auto" p="10px" justify="space-around">
        <Box>
          <Text mb="30px" fontSize="20px" fontWeight="500">
            Hello! {updatedDetails.name}. Want to update your details ?
          </Text>
          <Box>
            <FormControl>
              <FormLabel>Full name</FormLabel>
              <Input
                onChange={(e) =>
                  setUpdatedDetails({ ...updatedDetails, name: e.target.value })
                }
                value={updatedDetails.name}
                isReadOnly={read}
                border="none"
                placeholder="Update name"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={(e) =>
                  setUpdatedDetails({
                    ...updatedDetails,
                    email: e.target.value,
                  })
                }
                value={updatedDetails.email}
                isReadOnly={read}
                border="none"
                placeholder="Update Email"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Mobile</FormLabel>
              <Input
                onChange={(e) =>
                  setUpdatedDetails({
                    ...updatedDetails,
                    mobile: e.target.value,
                  })
                }
                value={updatedDetails.mobile}
                isReadOnly={read}
                border="none"
                placeholder="Update Mobile"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Input
                onChange={(e) =>
                  setUpdatedDetails({
                    ...updatedDetails,
                    gender: e.target.value,
                  })
                }
                value={updatedDetails.gender}
                isReadOnly={read}
                border="none"
                placeholder="Update Gender"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                onChange={(e) =>
                  setUpdatedDetails({
                    ...updatedDetails,
                    location: e.target.value,
                  })
                }
                value={updatedDetails.location}
                isReadOnly={read}
                border="none"
                placeholder="Update Address"
              />
            </FormControl>
            <Button
              mt="15px"
              w="100%"
              bg={"teal.200"}
              color={"black"}
              _hover={{
                bg: "#ff3e6c",
                color: "white",
              }}
              onClick={() => changeData(read)}
            >
              {read ? "EDIT" : "SUBMIT"}
            </Button>
          </Box>
        </Box>
        <Button
          onClick={() => Logout()}
          py="20px"
          pl="90px"
          pr="90px"
          bg={"#ff3e6c"}
          color={"white"}
          _hover={{
            bg: "teal.200",
            color: "black",
          }}
        >
          SignOut
        </Button>
      </Flex>
    </Box>
  ) : (
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
            <FormControl isRequired id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                isDisabled={loading}
                value={email}
                isRequired
                autoComplete="email"
                name="email"
                onChange={handleEmail}
                type="email"
                placeholder="Enter email"
              />
            </FormControl>
            <FormControl isRequired id="password">
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
