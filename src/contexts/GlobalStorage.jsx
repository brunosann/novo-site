import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [menuActive, setMenuActive] = useState("aboutMe");

  return (
    <GlobalContext.Provider value={{ menuActive, setMenuActive }}>
      {children}
    </GlobalContext.Provider>
  );
};
