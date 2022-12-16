import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Image,
} from "@chakra-ui/react";
import React from "react";

const ModalImage = ({ isOpen, onOpen, onClose, imgSrc }) => {
  return (
    <>
      <Modal
        
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <Image cursor="grab" src={imgSrc} alt="" />
          <ModalCloseButton />
          {/* <ModalBody></ModalBody> */}
          {/* <ModalFooter> */}
          {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
          {/* </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalImage;
