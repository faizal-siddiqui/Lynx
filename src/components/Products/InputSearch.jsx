import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";

const InputSearch = () => {
  return (
    <InputGroup>
      <Input placeholder="Enter Brand Name" />
      <InputRightElement children={<SearchIcon color="gray.500" />} />
    </InputGroup>
  );
};

export default InputSearch;
