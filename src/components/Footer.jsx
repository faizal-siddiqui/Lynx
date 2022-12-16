import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Appstore from "../images/Appstore.png";
import Playstore from "../images/Playstore.png";
import { Link as RouterLink } from "react-router-dom";

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, to }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={to}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial({limit}) {
  
  return (
    <Box
      mt={limit === 10 ? "200px": "40px"}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <RouterLink to="">About Us</RouterLink>
            <RouterLink to="">Blog</RouterLink>
            <RouterLink to="">Careers</RouterLink>
            <RouterLink to="">Contact Us</RouterLink>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <RouterLink to="">Help Center</RouterLink>
            <RouterLink to="">Safety Center</RouterLink>
            <RouterLink to="">Community Guidelines</RouterLink>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <RouterLink to="">Cookies Policy</RouterLink>
            <RouterLink to="">Privacy Policy</RouterLink>
            <RouterLink to="">Terms of Service</RouterLink>
            <RouterLink to="">Law Enforcement</RouterLink>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>ONLINE SHOPPING</ListHeader>
            <RouterLink to="">Men</RouterLink>
            <RouterLink to="">Women</RouterLink>
            <RouterLink to="">Kids</RouterLink>
            <RouterLink to="">Home & Living</RouterLink>
            <RouterLink to="">Beauty</RouterLink>
            <RouterLink to="">Gift Cards</RouterLink>
            <RouterLink to="">Lynx Insider</RouterLink>
          </Stack>

          <Stack>
            <ListHeader>CUSTOMER POLICIES</ListHeader>
            <RouterLink to="">FAQ</RouterLink>
            <RouterLink to="">T&C</RouterLink>
            <RouterLink to="">Terms Of Use</RouterLink>
            <RouterLink to="">Track Orders</RouterLink>
            <RouterLink to="">Shipping</RouterLink>
            <RouterLink to="">Cancellation</RouterLink>
            <RouterLink to="">Returns</RouterLink>
            <RouterLink to="">Grievance Officer</RouterLink>
          </Stack>

          <Stack>
            <ListHeader>Registered Office Address</ListHeader>
            <RouterLink to="">15 A VartMall</RouterLink>
            <RouterLink to="">Bangluru - 543456, India</RouterLink>
            <RouterLink to="">CIN: U54543KAK877PYSE454</RouterLink>
            <RouterLink to="">Phone: +91 9878765645</RouterLink>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Install App</ListHeader>
            <RouterLink to="">
              <Image w="150px" src={Appstore} />
            </RouterLink>
            <RouterLink to="">
              <Image w="150px" src={Playstore} />
            </RouterLink>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2022 www.lynx.com. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <RouterLink>
              <SocialButton label={"Twitter"}>
                <FaTwitter />
              </SocialButton>
            </RouterLink>
            <RouterLink>
              <SocialButton label={"YouTube"}>
                <FaYoutube />
              </SocialButton>
            </RouterLink>
            <RouterLink>
              <SocialButton label={"Instagram"}>
                <FaInstagram />
              </SocialButton>
            </RouterLink>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
