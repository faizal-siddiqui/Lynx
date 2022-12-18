import {
  Box,
  Button,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import PinkButton from "../Cart/PriceBox/PinkButton";
import RateStar from "../ProductDetails/RateStar";
import {editQty} from "../Cart/DeliveryBox/EditCart"

const SuccessButton = ({
  img = "https://media.tenor.com/s8qMqKiNWmQAAAAC/thank-you.gif",
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  //   for stars
  const [selectedRating, setSelectedRating] = useState("");
  const [star, UpdateStar] = useState("");

  // for clearing the cart
  const clearCart = () => {
    editQty([])
  }

  return (
    <Box>
      <Box ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box">
        Some other content that'll receive focus on close.
      </Box>

      <Button w="100%" bgColor="#ff3e6c" color="#fff" mt={4} onClick={onOpen}>
        Proceed
      </Button>
      <Modal isOpen={isOpen} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            YOUR ORDER IS SUCCESSFUL THANKYOU FOR SHOPPING
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Box>
              <Image src={img} alt="" />
            </Box>
            <Box m="auto" w="fit-content" p="20px">
              <Heading size="md" textAlign="center" my="15px">
                Rate Us
              </Heading>
              <RateStar
                maxRating={5}
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
                UpdateStar={UpdateStar}
              />
            </Box>
            <Box m="auto" onClose={onClose}>
              <PinkButton
                width={"100%"}
                btnText={"Shop More"}
                mt={"10px"}
                link={"/"}
                fs={"14px"}
                bgColor={"#14cda8"}
                OnClick={clearCart}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SuccessButton;
