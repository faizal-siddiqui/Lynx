import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ModalImage from "./ModalImage";
import { useState } from "react";

const ImagesCompo = ({ singleData, setSingleData }) => {
  const { id } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imgSrc, setImgSrc] = useState("");

  return (
    <Box>
      <ModalImage
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        imgSrc={imgSrc}
      />
      <Grid
        templateColumns={{
          lg: "repeat(2, 1fr)",
          md: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
        }}
        gap="10px"
      >
        {singleData &&
          singleData?.images &&
          singleData.images.map((img) => (
            <GridItem key={Math.random()*0.243*Math.random()} onClick={() => setImgSrc(img)}>
              <Image onClick={onOpen} src={img} alt={img}></Image>
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};

export default ImagesCompo;
