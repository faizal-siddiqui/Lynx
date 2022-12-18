import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PhoneIcon,
  CheckIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import images from "../images/lynx-logo.png";
import { useState } from "react";
import styles from "../styles/navbar.module.css";
import { NAV_ITEMS } from "./NavbarData";

import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  // NAV_ITEMS.map((el) => console.log(el.LISTS))
  // console.log(styles)
  return (
    <Box position="relative" bgColor="#ffffff">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ lg: "space-between", base: "center", md: "start" }}
        >
          <RouterLink to="/">
            <Image
              cursor="pointer"
              src={images}
              w={{ lg: "38%", md: "90%" }}
              display={{ lg: "block", md: "block", sm: "none" }}
              alt="logo"
            />
          </RouterLink>

          <Flex
            justifyContent="space-evenly"
            w="90%"
            display={{ base: "none", md: "flex" }}
            ml={10}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Stack>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input w="250px" placeholder="Search for products & brands" />
            </InputGroup>
          </Stack>

          <RouterLink to='/signin'>
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              <Box fontSize="20px">
                <CgProfile />
                <Text fontSize="13px">Profile</Text>
              </Box>
            </Button>
          </RouterLink>
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            <Box fontSize="20px">
              <AiOutlineHeart />
              <Text fontSize="13px">Wishlist</Text>
            </Box>
          </Button>
          <RouterLink to='/cart'>
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              <Box fontSize="20px">
                <BsHandbag />
                <Text fontSize="13px">Cart</Text>
              </Box>
            </Button>
          </RouterLink>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const [dropdown, setDropdown] = useState(false);

  return (
    <Stack direction={"row"} spacing={4} w="90%" justify="space-around">
      {NAV_ITEMS.map((navItem) => (
        <Box key={Math.random() * Math.random() * 0.001 * 0.004}>
          <Box>
            <Box alignItems="center" display="flex">
              <Link
                onMouseOver={() => setDropdown(true)}
                className={styles.dropdown_links}
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                >
                {/* <RouterLink to='/products/T-Shirt'> */}
                {navItem.label}
              {/* </RouterLink> */}
              </Link>
            </Box>

            {dropdown ? (
              <Box
                className={styles.dropdown}
                top="61px"
                width="90%"
                height="300px"
                left="10"
                color="#f5f5f6"
                position="absolute"
                zIndex="100"
                bg="white"
                onMouseOver={() => setDropdown(true)}
                onMouseOut={() => setDropdown(false)}
              >
                <Stack direction="row" spacing="20" p="20px">
                  {navItem.LISTS.map((el) => {
                    return (
                      <>
                        <Stack
                          key={Math.random() * Math.random() * 0.001 * 0.004}
                        >
                          <Text
                            fontWeight="bold"
                            color="red.300"
                            fontSize="13px"
                            size="sm"
                          >
                            {el.head}
                          </Text>
                          {el.lists.map((list) => (
                            <RouterLink to={`/products/${list}`}>
                              <Text
                                className={styles.links}
                                fontSize="12px"
                                color="black"
                              >
                                {list}
                              </Text>
                            </RouterLink>
                          ))}
                        </Stack>
                      </>
                    );
                  })}
                </Stack>
              </Box>
            ) : (
              ""
            )}
          </Box>

          {/* 
            {navItem.children && (
              <PopoverContent
              border="7px solid black"
              position="absolute"
                w="200%"
                // border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )} */}
        </Box>
      ))}
    </Stack>
  );
};

// const DesktopSubNav = ({ label, href, subLabel }) => {
//   return (
//     <Link
//       href={href}
//       role={"group"}
//       display={"block"}
//       p={2}
//       rounded={"md"}
//       _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//     >
//       <Stack direction={"row"} align={"center"}>
//         <Box>
//           <Text
//             transition={"all .3s ease"}
//             _groupHover={{ color: "pink.400" }}
//             fontWeight={500}
//           >
//             {label}
//           </Text>
//           <Text fontSize={"sm"}>{subLabel}</Text>
//         </Box>
//         <Flex
//           transition={"all .3s ease"}
//           transform={"translateX(-10px)"}
//           opacity={0}
//           _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//           justify={"flex-end"}
//           align={"center"}
//           flex={1}
//         >
//           <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//         </Flex>
//       </Stack>
//     </Link>
//   );
// };

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <RouterLink key={child.label} py={2} href={child.href}>
                {child.label}
              </RouterLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
