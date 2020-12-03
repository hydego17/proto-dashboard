import { useState, useEffect } from "react";
import HeaderContext from "contexts/HeaderContext";

export default function ContextWrapper({ children }) {
  // Responsive navbar state
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <HeaderContext.Provider
      value={{
        openMenu,
        setOpenMenu,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
