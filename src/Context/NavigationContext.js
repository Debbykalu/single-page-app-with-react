import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePath = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePath);

    // Cleanup function
    return () => {
      window.removeEventListener('popstate', handlePath);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ navigate, currentPath }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };

export default NavigationContext;
