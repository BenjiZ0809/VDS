import React, { createContext, useContext, useEffect, useState } from "react";

// @ts-ignore
const SavedQueriesContext = createContext();
export const SavedQueriesProvider = ({ children }) => {
  const [savedQueries, setSavedQueries] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("savedQueries");
    if (saved) {
      setSavedQueries(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedQueries", JSON.stringify(savedQueries));
  }, [savedQueries]);

  return (
    <SavedQueriesContext.Provider value={{ savedQueries, setSavedQueries }}>
      {children}
    </SavedQueriesContext.Provider>
  );
};

export const useSavedQueries = () => {
  const context = useContext(SavedQueriesContext);
  if (!context) {
    throw new Error(
      "useSavedQueries must be used within a SavedQueriesProvider"
    );
  }
  return context;
};
