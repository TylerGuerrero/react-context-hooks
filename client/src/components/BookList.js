import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const BookList = () => {
    
    // gets the theme context created has access to state and funtion
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
            <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
                <ul>
                    <li style={{background: theme.ui}}>the way of the kings</li>
                    <li style={{background: theme.ui}}>the name of the world</li>
                    <li style={{background: theme.ui}}>the final empire</li>
                </ul>
            </div>
    );
}

export default BookList