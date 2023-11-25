import React, { createContext, useState, useContext } from "react";

const QuickviewContext = createContext();

export const QuickViewProvider = ({ children }) => {
  const [quickViewData, setQuickViewData] = useState(null);

  const openQuickView = (products) => {
    setQuickViewData({ products });
  };

  const closeQuickView = () => {
    setQuickViewData(null);
  };
  return (
    <QuickviewContext.Provider
      value={{ quickViewData, openQuickView, closeQuickView }}
    >
      {children}
    </QuickviewContext.Provider>
  );
};

export const useQuickView = () => {
  const context = useContext(QuickviewContext);
  if (!context) {
    throw new Error("useQuickView must be used within a QuickViewProvider");
  }
  return context;
};
