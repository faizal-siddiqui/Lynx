import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import IconHeading from "./IconHeading";
import { MdOutlineLocalOffer } from "react-icons/md";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Offersbox = ({pText = '10% instant Discount on ICICI Bank Credit and Debit Cards on a minspend of Rs 3500 TCA', headingText='Available Offers'}) => {
  return (
    <Box>
      <Stack>
        <IconHeading
          icon={<MdOutlineLocalOffer />}
          headText={headingText}
        />
        <Text color="gray" fontSize="13px">
          {pText}
        </Text>
        <Text fontWeight="500" color="red" cursor="pointer" fontSize="14px">
          Show More <ChevronDownIcon />
        </Text>
      </Stack>
    </Box>
  );
};

export default Offersbox;
