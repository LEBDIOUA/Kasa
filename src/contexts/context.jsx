import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext();
const FirstVisitContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
export const useLoading = () => useContext(LoadingContext);

export const FirstVisitProvider = ({ children }) => {
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  return (
    <FirstVisitContext.Provider value={{ isFirstVisit, setIsFirstVisit }}>
      {children}
    </FirstVisitContext.Provider>
  );
};
export const useFirstVisit = () => useContext(FirstVisitContext);
