import { ChevronRightIcon } from "@chakra-ui/icons";
import { BreadcrumbItem, Breadcrumb, } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const BreadcrumbCompo = ({categ}) => {
  return (
    <Breadcrumb
      ml="15px"
      mt="15px"
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
    >
      <BreadcrumbItem>
        <RouterLink to="/">Home</RouterLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <RouterLink to={`/products/${categ}`}>{categ}</RouterLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadcrumbCompo;
