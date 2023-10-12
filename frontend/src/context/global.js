import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e);
  };

  return (
    <GlobalContext.Provider
      value={{
        search,
        handleSearchChange,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContextProvider, useGlobalContext };