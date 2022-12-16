import React, { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  return (
    <DataContext.Provider
      value={{ data, setData, page, setPage, limit, setLimit }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
