import { useState, useEffect, createContext } from "react";

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);  /*document.documentElement.setAttribute('data-bs-theme', theme);*/
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const value = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext value={value}>
            {children}
        </ThemeContext>
    );
}

export { ThemeContext, ThemeProvider };