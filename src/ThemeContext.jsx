import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === 'false';
      } catch (error) {
        // Handle case where localStorage is unavailable
        return false;
      }
    }
    return false;
  });
  
  useEffect(() => {
    try {
      localStorage.setItem('darkMode', darkMode);
    } catch (error) {
      // Handle localStorage errors
      console.warn('Unable to save theme preference to localStorage');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
