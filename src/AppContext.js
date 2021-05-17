
import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [mainControl, setMainControl] = useState("home");

  return (
    <AppContext.Provider value=
    {{
        mainControl,
        setMainControl,  
      }}
    >
      {children}
    </AppContext.Provider>
  );
}