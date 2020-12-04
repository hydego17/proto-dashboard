import { useState, useEffect, useContext } from "react";
import HeaderContext from "providers/HeaderContext";

export const useViewPort = () => useContext(HeaderContext);

export default function ContextWrapper({ children }) {
  // Set viewport (min: 1023px)
  const [mQuery, setMQuery] = useState({});

  useEffect(() => {
    const isLarge = {
      matches: window.innerWidth > 1023 ? true : false,
    };
    setMQuery(isLarge);

    let mediaQuery = window.matchMedia(`(min-width: 1023px)`);
    mediaQuery.addEventListener("change", setMQuery);

    return () => mediaQuery.removeEventListener("change", setMQuery);
  }, []);

  return (
    <HeaderContext.Provider
      value={{
        mQuery,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
