import { createContext, useEffect, useState } from 'react'

const DarkModeContext = createContext();

// eslint-disable-next-line react/prop-types
const DarkModeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedMode = localStorage.getItem('darkmode');        
        if (storedMode) {
            setIsDarkMode(JSON.parse(storedMode));            
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);        
        localStorage.setItem('darkmode', JSON.stringify(newMode));
    }

    useEffect(() => {
        if 
        (isDarkMode){document.body.classList.add("DarkBody");} 
        else 
        {document.body.classList.remove("DarkBody");}
        }, [isDarkMode])

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
        
export { DarkModeContext, DarkModeProvider };

