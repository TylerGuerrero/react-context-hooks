import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light ,dark } = this.context;
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
}

export default BookList