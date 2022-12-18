import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Stack } from "@chakra-ui/react";
import React from "react";
import IconHeading from "../Cart/DeliveryBox/IconHeading";
import {GiTakeMyMoney} from "react-icons/gi"
import PaymentHeading from "./PaymentHeading";

const PaymentAccordion = () => {
  return (
    <Accordion>
      <AccordionItem>
        <h2>
          <AccordionButton bgColor="#f4f4f5" _expanded={{ bg: "#14cda8", color: "#fff" }}>
            <Box p="5px" as="span" flex="1" textAlign="left">
              <IconHeading  icon={<GiTakeMyMoney fontSize="20px" />} headText={"Cash On Delivery (Cash/UPI)"} />
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

                </Box>
            </Stack>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
            <Box as="span" flex="1" textAlign="left">
              Click me to see a different style
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default PaymentAccordion;
