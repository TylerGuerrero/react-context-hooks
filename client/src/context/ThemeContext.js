import React, { Component, createContext } from 'react';

// The context
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLightTheme: true,
            light: {
                syntax: '#555',
                ui: '#ddd',
                bg: '#eee'
            },
            dark: {
                syntax: '#ddd',
                ui: '#333',
                bg: '#555'
            }
        };
    }

    toggleTheme = () => {
        this.setState({isLightTheme: !this.state.isLightTheme})
    }

    render() {
        return (
            // wraps the components so you can access the data
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {/* access the components, places the component here */}
                {this.props.children}
            </ThemeContext.Provider>
        );
    }


}

export default ThemeContextProvider;