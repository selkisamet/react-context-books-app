import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    useEffect(() => {
        setIsDarkTheme(true);
    }, []);

    const value = {
        bg: isDarkTheme ? "#222529" : "#f8f9fa",
        text: isDarkTheme ? "#d65f5f" : "#222529",
        hover: isDarkTheme ? "rgba(231, 76, 60, 0.7)" : "rgba(254, 209, 54, 0.7)"
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;