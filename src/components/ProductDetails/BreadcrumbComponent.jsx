import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const BreadcrumbComponent = ({ id, categ, singleData }) => {
  return (
    <Breadcrumb
      Breadcrumb
      ml="15px"
      mt="15px"
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
    >
      <BreadcrumbItem
        fontSize={{ lg: "14px", md: "12px", sm: "11px", base: "10px" }}
      >
        <RouterLink to="/">Home</RouterLink>
      </BreadcrumbItem>

      <BreadcrumbItem
        fontSize={{ lg: "14px", md: "12px", sm: "11px", base: "10px" }}
      >
        <RouterLink to={`/products/${categ}`}>{categ}</RouterLink>
      </BreadcrumbItem>

      <BreadcrumbItem
        fontSize={{ lg: "14px", md: "12px", sm: "11px", base: "10px" }}
        isCurrentPage
      >
        <RouterLink to={`/products/${categ}/${id}`}>
          {singleData?.name && singleData.name}
        </RouterLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
