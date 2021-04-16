import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class Navbar extends Component {
    constructor(props) {
        super(props);
         this.state = {}
    }
    
    render () {
        return (
            <ThemeContext.Consumer>
                {(context) => {
                    const { isLightTheme, light, dark } = context;
                    const theme = isLightTheme ? light : dark;

                    return (
                        <nav style= {{ background: theme.ui, color : theme.syntax}}>
                            <h1>Context App</h1>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contract</li>
                            </ul>
                        </nav>
                    );
                }}
            </ThemeContext.Consumer>
        );
    }
}

export default Navbar