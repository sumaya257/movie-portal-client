import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeProvider';


const AppWrapper = ({ children }) => {
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            {children}
        </div>
    );
};

export default AppWrapper;
