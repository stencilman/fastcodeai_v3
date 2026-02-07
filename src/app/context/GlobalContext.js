"use client"
import React, { createContext, useContext, useState, useMemo } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const value = useMemo(() => ({ isActive, setIsActive }), [isActive]);

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};
