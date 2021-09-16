import React, {createContext, useState} from "react";
import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";
import {ThemeProvider} from '@mui/material/styles';

export const ThemeContext = createContext();


const ThemeContextProvider = props => {
    const [theme, setTheme] = useState(darkTheme);
    const [themeString, setThemeString] = useState('dark');

    const toggleTheme = () => {
        if(themeString === 'dark')
        {
            setTheme(lightTheme);
            setThemeString('light');
        }
        else
        {
            setTheme(darkTheme);
            setThemeString('dark');
        }          
    };

    return (
      <ThemeContext.Provider value={{toggleTheme}}>
        <ThemeProvider theme={theme}>
          {props.children}
        </ThemeProvider>
      </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;