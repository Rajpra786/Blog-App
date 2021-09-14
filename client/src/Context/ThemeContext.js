import React, {createContext, useState} from "react";
import { light } from "../themes/light";
import { dark } from "../themes/dark";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
    const [theme, setTheme] = useState(light);
    const [themeString, setThemeString] = useState('light');


    const toggleTheme = () => {
        if(themeString === 'dark')
        {
            setTheme(light);
            setThemeString('light');
        }
        else
        {
            setTheme(dark);
            setThemeString('dark');
        }          
    };

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme}}>
        {props.children}
      </ThemeContext.Provider>
    );
  };
  
  export default ThemeContextProvider;