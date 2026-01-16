"use client"
import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <GlobalContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </GlobalContext.Provider>
  );
};
