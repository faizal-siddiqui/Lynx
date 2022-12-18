import { useState } from "react";
import { createContext } from "react";

export const ButtonContext = createContext();

const ButtonContextProvider = ({ children }) => {
  const [btnText, setBtnText] = useState("ADD TO CART");

  return (
    <ButtonContext.Provider value={{ btnText, setBtnText }}>
      {children}
    </ButtonContext.Provider>
  );
};

export default ButtonContextProvider;
