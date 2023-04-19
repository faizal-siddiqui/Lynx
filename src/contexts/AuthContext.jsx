import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {


    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("auth")))

  return <AuthContext.Provider value={{isAuth, setIsAuth}}>{children}</AuthContext.Provider>;
};


export default AuthContextProvider
