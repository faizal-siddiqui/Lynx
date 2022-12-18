import {
  Box,
  Grid,
  GridItem,
  Heading,
  Modal,
  ModalContent,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CircularSizes from "./CircularSizes";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { useContext } from "react";
import { DeliveryContext } from "../../../contexts/DeliveryContext";

function DeliveryModal({ SIZES, modalText, stateVar, modalHeading, data, el }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState(stateVar);

  const { profileId, setProfileId, setCart, cart, fetchCart, profileData } =
    useContext(DeliveryContext);

  return (
    <>
      <Text
        fontWeight="500"
        fontSize="13px"
        bgColor="gray.100"
        cursor="pointer"
        onClick={onOpen}
      >
        {modalText}: {size} <ChevronDownIcon />
      </Text>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalContent>
          {/* <ModalContent /> */}
          <Box p="20px">
            <Heading mb="20px" size={"sm"}>
              {modalHeading}
            </Heading>
            <Grid
              gap={{ lg: 0, md: 3, sm: 3 }}
              templateColumns={{
                lg: "repeat(6, 1fr)",
                md: "repeat(3, 1fr)",
                sm: "repeat(3, 1fr)",
              }}
            >
              {SIZES &&
                SIZES.map((size) => (
                  <GridItem
                    onClick={onClose}
                    key={Math.random() * 0.656 * Math.random()}
                  >
                    <CircularSizes
                      content={size}
                      setSize={setSize}
                      onClose={onClose}
                      data={data}
                      el={el}
                    />
                  </GridItem>
                ))}
            </Grid>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeliveryModal;
