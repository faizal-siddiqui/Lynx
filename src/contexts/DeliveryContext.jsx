import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
export const DeliveryContext = createContext();

const DeliveryContextProvider = ({ children }) => {
  const [profileId, setProfileId] = useState("");
  const [cart, setCart] = useState([]);
  const [profileData, setProfileData] = useState({});
  // const [prodSize, setProdSize] = useState(0);
  // const [prodQty, setProdQty] = useState(0);

  const fetchCart = async (
    email = "faizalsidp@gmail.com",
    name = "Faizal Siddiqui"
  ) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PRODUCTS}/profile?email=${email}&name=${name}`
      );
      response?.data[0]?.cart && setCart(response.data[0].cart);
      response?.data[0] && setProfileData(response.data[0]);
      response?.data[0].id && setProfileId(response.data[0].id);
    } catch (err) {
      console.log("err:", err);
    }
  };

  return (
    <DeliveryContext.Provider
      value={{
        profileId,
        setProfileId,
        setCart,
        cart,
        fetchCart,
        profileData,
        profileId,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  );
};

export default DeliveryContextProvider;
