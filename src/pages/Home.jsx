import React from "react";
import Banner from "../components/Banner";
import MainBanner from "../components/MainBanner";
import { Box } from "@chakra-ui/react";
import {
  LOWESTPRICES,
  SUPERSAVINGS,
  TOPLISTED,
  NEVERSEEN,
  CATEGORY,
} from "../components/ComponentsData/GridsData";
import ImageGrid from "../components/ImageGrid";
import CategoryGrid from "../components/CategoryGrid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box w="100%" bgColor="#fefefe">
        {/* BAnners  */}
        {BANNER.map((el) => (
          <MainBanner key={Math.random()*0.76756*Math.random()} image={el} />
        ))}

        {/* LowestPrice Grid */}
        {
          <>
            <ImageGrid images={LOWESTPRICES} />
          </>
        }

        {/* Super Saving Zone Grid */}
        {
          <>
            <Banner image={SUPERSAVINGBANNER} />
            <ImageGrid images={SUPERSAVINGS} />
          </>
        }

        {/* Top Listed Style Grid */}
        {
          <>
            <Banner image={TOPLISTEDBANNER} />
            <ImageGrid images={TOPLISTED} />
          </>
        }

        {/* NEVER SEEN OFFERS Grid */}
        {
          <>
            <Banner image={NEVERSEENBANNER} />
            <ImageGrid images={NEVERSEEN} />
          </>
        }

        {/* SHOP BY CATEGORY Grid */}
        {
          <>
            <Banner image={CATEGORYBANNER} />
            <CategoryGrid images={CATEGORY} />
          </>
        }

        <Footer />
      </Box>
    </>
  );
};

export default Home;

const BANNER = [
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/7bb93f35-48fb-4318-9680-c6a3797f95811645198488041-desktop.gif",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/8/c31bd037-958b-40fa-bdaf-3f0fc1c71ce21670497018730-Crazy-deals-DK.jpg",
];

const SUPERSAVINGBANNER = [
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/246a6b35-8899-43ba-9f97-2ea0ac5a88ba1670406285563-Super-Savings-Zone.jpg",
];

const TOPLISTEDBANNER = [
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/28cff5a2-9d32-42f6-b160-64617ea62e211670406647314-Top-Listed-Styles.jpg",
];

const NEVERSEENBANNER = [
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/418510b5-16fc-4853-9323-1785df1a38ce1670406564990-Never-Seen-Before-Offers.jpg",
];

const CATEGORYBANNER = [
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/3a8ff13b-934d-4ad3-b73f-bb64660dd82a1670406141566-SALE-Sectional-Header_1-Line-----7.jpg",
];
