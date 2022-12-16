import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import DataContextProvider from "./contexts/DataContext";
// import ProductDetailsContextProvider from "./contexts/ProductDetailsContext";
// import { theme } from "./Breakpoints/BreakPoints";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        {/* <ProductDetailsContextProvider> */}
          <DataContextProvider>
            <App />
          </DataContextProvider>
        {/* </ProductDetailsContextProvider> */}
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
