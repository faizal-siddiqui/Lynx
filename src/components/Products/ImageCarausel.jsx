import { Image } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
const ImageCarausel = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const ref = useRef(null);

  const startCarause = () => {
    if (ref.current != null) {
      return;
    }
    ref.current = setInterval(() => {
      setImgIndex((prev) => {
        if (prev === 2) {
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const stopCarause = () => {
    clearInterval(ref.current);
    ref.current = null;
    setImgIndex(0)
  };

  useEffect(() => {
    return () => {
      stopCarause();
      setImgIndex(0);
    };
  }, []);

  return (
    <>
      <Image
        onMouseOver={() => {
          startCarause();
        }}
        onMouseLeave={() => {
          stopCarause();
        }}
        src={images[imgIndex]}
        alt=""
      />
    </>
  );
};

export default ImageCarausel;
