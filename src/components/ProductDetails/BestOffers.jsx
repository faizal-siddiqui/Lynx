import { Box, Text } from "@chakra-ui/react";
import React from "react";
import EligibleProducts from "./EligibleProducts";

const BestOffers = () => {
  return (
    <Box>
      <Text fontWeight="600" mr="10px">
        BEST OFFERS
      </Text>
      {offersData.map((data) => (
        <EligibleProducts
          key={Math.random()*0.01*Math.random()}
          headText={data.headText}
          bestOffers={data.bestOffers}
          footText={data.footText}
        />
      ))}
    </Box>
  );
};

export default BestOffers;

const offersData = [
  {
    headText: "Best Price",
    bestOffers: [
      "Applicable on: Orders above Rs. 599 (only on first purchase)",
      "Coupon code: LYNXNEW",
      "Coupon Discount: Rs. 99 off (check cart for final savings)",
    ],
    footText: "View Eligible Products",
  },
  {
    headText: "10% Instant Discount on ICICI Bank Credit and Debit Cards.",
    bestOffers: ["Min Spend 1500 ; Max Discount Rs 500"],
    footText: "View Eligible Products",
  },
  {
    headText: "10% Instant Discount on HDFC Credit and Debit Cards.",
    bestOffers: ["Min Spend 2000 ; Max Discount Rs 500"],
    footText: "View Eligible Products",
  },
  {
    headText: "Flat Rs 150 Cashback on Paytm Wallet and Postpaid Transactions.",
    bestOffers: ["Min Spend 1000"],
    footText: "View Eligible Products",
  },
  {
    headText: "EMI option available",
    bestOffers: ["EMI starting from Rs.19/month"],
    footText: "View Plan",
  },
];
