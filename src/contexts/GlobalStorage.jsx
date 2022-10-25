import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [menuActive, setMenuActive] = useState("aboutMe");
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);

  const handleSectionLink = (e) => {
    e.preventDefault();
    const target = e.target.dataset.target;
    const menuToActivate = e.target.dataset.menuActive;
    const element = document.querySelector(target);
    if (menuToActivate) setMenuActive(menuToActivate);
    setIsMenuBarOpen(false);
    element.scrollIntoView();
  };

  return (
    <GlobalContext.Provider
      value={{
        menuActive,
        setMenuActive,
        isMenuBarOpen,
        setIsMenuBarOpen,
        handleSectionLink,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
