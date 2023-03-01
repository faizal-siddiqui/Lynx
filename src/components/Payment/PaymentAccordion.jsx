import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import IconHeading from "../Cart/DeliveryBox/IconHeading";
import { GiTakeMyMoney } from "react-icons/gi";
import PaymentHeading from "./PaymentHeading";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { BsCreditCard2Back } from "react-icons/bs";
import { BiCreditCardAlt } from "react-icons/bi";
import { BiWallet } from "react-icons/bi";
import { AiOutlineBank } from "react-icons/ai";

const PaymentAccordion = () => {
  const [code, setCode] = useState(767545);
  const [inputCode, setInputCode] = useState("");
  const [disable, setDisable] = useState(false);
  console.log("disable:", disable);
  const toast = useToast();

  const generateCode = () => {
    setCode(Math.floor(Math.random() * 1000000));
  };

  const checkCode = () => {
    if (code == inputCode) {
      setDisable(true);
      toast({
        title: "Captch Verified",
        status: "success",
        position: "top",
        isClosable: true,
      });
    } else {
      setDisable(false);
      toast({
        title: "Captch Incorrect",
        status: "error",
        position: "top",
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton
              bgColor="#f4f4f5"
              _expanded={{ bg: "#14cda8", color: "#fff" }}
            >
              <Box p="5px" as="span" flex="1" textAlign="left">
                <IconHeading
                  icon={<GiTakeMyMoney fontSize="20px" />}
                  headText={"Cash On Delivery (Cash/UPI)"}
                />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Stack spacing={4}>
              <Box>
                <PaymentHeading headText={"Pay On Delivery (Cash/UPI)"} />
              </Box>
              <Box>
                <Flex align="center">
                  <Flex
                    fontSize="25px"
                    align="center"
                    justify="center"
                    w="30%"
                    h="80px"
                    m="auto"
                    border="1px"
                    borderColor="gray.300"
                  >
                    <Box>
                      <s>{code}</s>
                    </Box>
                  </Flex>
                  <Box>
                    <Button onClick={() => generateCode()}>Change</Button>
                  </Box>
                </Flex>
                <Flex m="auto" justify="center" mt="25px">
                  <Box>
                    <Input
                      isDisabled={disable}
                      type="number"
                      onChange={(e) => setInputCode(e.target.value)}
                      value={inputCode}
                      placeholder="Enter captcha"
                    />
                  </Box>
                  <Box>
                    <Button
                      isDisabled={disable}
                      onClick={() => checkCode()}
                      bgColor="#14cda8"
                      color="#fff"
                    >
                      SUBMIT
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton
              bgColor="#f4f4f5"
              _expanded={{ bg: "#14cda8", color: "#fff" }}
            >
              <Box p="5px" as="span" flex="1" textAlign="left">
                <IconHeading
                  icon={<BsCreditCard2Back fontSize="20px" />}
                  headText={"Credit/ Debit Card"}
                />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Stack spacing={4}>
              <Box>
                <PaymentHeading headText={"Credit/ Debit Card"} />
              </Box>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton
              bgColor="#f4f4f5"
              _expanded={{ bg: "#14cda8", color: "#fff" }}
            >
              <Box p="5px" as="span" flex="1" textAlign="left">
                <IconHeading
                  icon={<BiCreditCardAlt fontSize="20px" />}
                  headText={"Phone Pay/ Goggle pay / UPI"}
                />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Stack spacing={4}>
              <Box>
                <PaymentHeading headText={"Phone Pay/ Goggle pay / UPI"} />
              </Box>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton
              bgColor="#f4f4f5"
              _expanded={{ bg: "#14cda8", color: "#fff" }}
            >
              <Box p="5px" as="span" flex="1" textAlign="left">
                <IconHeading
                  icon={<BiWallet fontSize="20px" />}
                  headText={"Paytm / Wallet"}
                />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Stack spacing={4}>
              <Box>
                <PaymentHeading headText={"Paytm / Wallet"} />
              </Box>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton
              bgColor="#f4f4f5"
              _expanded={{ bg: "#14cda8", color: "#fff" }}
            >
              <Box p="5px" as="span" flex="1" textAlign="left">
                <IconHeading
                  icon={<AiOutlineBank fontSize="20px" />}
                  headText={"Net Banking"}
                />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Stack spacing={4}>
              <Box>
                <PaymentHeading headText={"Net Banking"} />
              </Box>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default PaymentAccordion;
