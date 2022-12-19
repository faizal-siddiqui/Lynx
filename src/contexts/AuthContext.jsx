import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {


    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("auth")))
    const [name, setName] = useState(JSON.parse(localStorage.getItem("name")))

  return <AuthContext.Provider value={{isAuth, setIsAuth, name, setName}}>{children}</AuthContext.Provider>;
};


export default AuthContextProvider
