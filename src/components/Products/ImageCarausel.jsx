import { Image } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
const ImageCarausel = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [carause, setCarause] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setCarause(true);
    ref.current = setInterval(() => {
      setImgIndex((prev) => {
        if (prev === 2) {
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(ref.current);
      setCarause(false);
      setImgIndex(0);
    };
  }, []);

  return (
    <>
      <Image src={images[imgIndex]} alt="" />;
    </>
  );
};

export default ImageCarausel;
