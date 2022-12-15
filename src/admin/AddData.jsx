import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import axios from "axios";
const initialData = {
  brand: "",
  name: "",
  rating: {
    star: "",
    count: "",
  },
  price: "",
  mrp: "",
  discount: "",
  productDetails: "",
  size: "",
  material: "",
  category: "tshirts",
  type: "men",
  specification: {
    fabric: "",
    fit: "",
    length: "",
    mainTrend: "",
  },
  images: [],
  reviews: [],
};

const reducer = (state, actions) => {
  switch (actions.type) {
    case "discount": {
      return { ...state, discount: actions.payload };
    }
    case "brand": {
      return { ...state, brand: actions.payload };
    }
    case "name": {
      return { ...state, name: actions.payload };
    }
    case "star": {
      return { ...state, rating: { ...state.rating, star: actions.payload } };
    }
    case "count": {
      return { ...state, rating: { ...state.rating, count: actions.payload } };
    }
    case "price": {
      return { ...state, price: actions.payload };
    }
    case "mrp": {
      return { ...state, mrp: actions.payload };
    }
    case "productDetails": {
      return { ...state, productDetails: actions.payload };
    }
    case "size": {
      return { ...state, size: actions.payload };
    }
    case "material": {
      return { ...state, material: actions.payload };
    }
    case "fabric": {
      return {
        ...state,
        specification: { ...state.specification, fabric: actions.payload },
      };
    }
    case "fit": {
      return {
        ...state,
        specification: { ...state.specification, fit: actions.payload },
      };
    }
    case "length": {
      return {
        ...state,
        specification: { ...state.specification, length: actions.payload },
      };
    }
    case "mainTrend": {
      return {
        ...state,
        specification: { ...state.specification, mainTrend: actions.payload },
      };
    }
    case "image1": {
      return { ...state, images: [...state.images, actions.payload] };
    }
    case "image2": {
      return { ...state, images: [...state.images, actions.payload] };
    }
    case "image3": {
      return { ...state, images: [...state.images, actions.payload] };
    }

    case "reset": {
      return initialData;
    }
  }
};

const AddData = () => {
  const [state, dispatch] = useReducer(reducer, initialData);
  console.log("state:", state);
  const [loading, setLoading] = useState(false);

  const addData = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`http://localhost:3000/products`, {
        ...state,
      });

      setLoading(false);
      dispatch({ type: "reset" });
    } catch (err) {
      console.log("err:", err);
      setLoading(false);
    }
  };

  const discount = (e) => {
    dispatch({ type: "discount", payload: +e.target.value });
  };

  const brand = (e) => {
    dispatch({ type: "brand", payload: e.target.value });
  };

  const name = (e) => {
    dispatch({ type: "name", payload: e.target.value });
  };

  const star = (e) => {
    dispatch({ type: "star", payload: +e.target.value });
  };

  const count = (e) => {
    dispatch({ type: "count", payload: +e.target.value });
  };

  const price = (e) => {
    dispatch({ type: "price", payload: +e.target.value });
  };

  const mrp = (e) => {
    dispatch({ type: "mrp", payload: +e.target.value });
  };

  const productDetails = (e) => {
    dispatch({ type: "productDetails", payload: e.target.value });
  };

  const size = (e) => {
    dispatch({ type: "size", payload: e.target.value });
  };

  const material = (e) => {
    dispatch({ type: "material", payload: e.target.value });
  };

  const fabric = (e) => {
    dispatch({ type: "fabric", payload: e.target.value });
  };

  const fit = (e) => {
    dispatch({ type: "fit", payload: e.target.value });
  };

  const length = (e) => {
    dispatch({ type: "length", payload: e.target.value });
  };

  const mainTrend = (e) => {
    dispatch({ type: "mainTrend", payload: e.target.value });
  };

  const image1 = (e) => {
    dispatch({ type: "image1", payload: e.target.value });
  };

  const image2 = (e) => {
    dispatch({ type: "image2", payload: e.target.value });
  };

  const image3 = (e) => {
    dispatch({ type: "image3", payload: e.target.value });
  };

  return (
    <Box w="60%" m="auto">
      <Heading>Form To add Data</Heading>
      <FormControl isRequired>
        <FormLabel>Discount</FormLabel>
        <Input
          value={state.discount}
          onChange={discount}
          placeholder="Discount Percentage"
          type="number"
        />

        <FormLabel>Brand</FormLabel>
        <Input
          value={state.brand}
          onChange={brand}
          placeholder="Brand"
          type="text"
        />

        <FormLabel>Name</FormLabel>
        <Input
          value={state.name}
          onChange={name}
          placeholder="Name"
          type="text"
        />

        <FormLabel>Rating stars</FormLabel>
        <Input
          value={state.rating.star}
          onChange={star}
          placeholder="Ratings Stars"
          type="number"
        />

        <FormLabel>Rating Count</FormLabel>
        <Input
          value={state.rating.count}
          onChange={count}
          placeholder="Ratings Count"
          type="number"
        />

        <FormLabel>Price</FormLabel>
        <Input
          value={state.price}
          onChange={price}
          placeholder="Price"
          type="number"
        />

        <FormLabel>MRP</FormLabel>
        <Input
          value={state.mrp}
          onChange={mrp}
          placeholder="MRP"
          type="number"
        />

        <FormLabel>Product Details</FormLabel>
        <Input
          value={state.productDetails}
          onChange={productDetails}
          placeholder="Product Details"
          type="text"
        />

        <FormLabel>Size</FormLabel>
        <Input
          value={state.size}
          onChange={size}
          placeholder="Size"
          type="text"
        />

        <FormLabel>Material</FormLabel>
        <Input
          value={state.material}
          onChange={material}
          placeholder="Material"
          type="text"
        />

        <FormLabel>specification (Fabric)</FormLabel>
        <Input
          value={state.specification.fabric}
          onChange={fabric}
          placeholder="specification (Fabric)"
          type="text"
        />

        <FormLabel>specification (Fit)</FormLabel>
        <Input
          value={state.specification.fit}
          onChange={fit}
          placeholder="specification (Fit)"
          type="text"
        />

        <FormLabel>specification (Length)</FormLabel>
        <Input
          value={state.specification.length}
          onChange={length}
          placeholder="specification (Length)"
          type="text"
        />

        <FormLabel>specification (MainTrend)</FormLabel>
        <Input
          value={state.specification.mainTrend}
          onChange={mainTrend}
          placeholder="specification (Main Trend)"
          type="text"
        />

        <FormLabel>Image 1</FormLabel>
        <Input onChange={image1} placeholder="Image 1" type="text" />

        <FormLabel>Image 2</FormLabel>
        <Input onChange={image2} placeholder="Image 2" type="text" />

        <FormLabel>Image 3</FormLabel>
        <Input onChange={image3} placeholder="Image 3" type="text" />
      </FormControl>
      <Stack direction="row" spacing={4}>
        <Button
          isLoading={loading}
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
          display="block"
          margin="auto"
          w="190px"
          onClick={() => addData()}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default AddData;
