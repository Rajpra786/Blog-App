import React, { createContext, useState } from "react";
import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";
import { ThemeProvider } from '@mui/material/styles';

export const ThemeContext = createContext();


const ThemeContextProvider = props => {
  const [theme, setTheme] = useState(lightTheme);
  const [themeString, setThemeString] = useState('light');

  const toggleTheme = () => {
    if (themeString === 'dark') {
      setTheme(lightTheme);
      setThemeString('light');
    }
    else {
      setTheme(darkTheme);
      setThemeString('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;