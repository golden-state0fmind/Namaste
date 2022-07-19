import React, { createContext, useState } from 'react';

const ThemeContext = createContext();
const ThemeContextProvider = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <ThemeContext.Provider value={{
            menuOpen,
            setMenuOpen
        }} >
            {props.children}
        </ThemeContext.Provider>
    );
};
export { ThemeContextProvider, ThemeContext };