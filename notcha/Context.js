import React, { createContext, useState } from "react";

export const AppContext = createContext({});

export default function AppContextProvider(props) {
  
  const [darkTheme, setDarkTheme] = useState(false);
  const [onlineSession, setOnlineSession] = useState(false);
  
  return (
    <AppContext.Provider value={{
      darkTheme, 
      setDarkTheme, 
      onlineSession, 
      setOnlineSession,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}