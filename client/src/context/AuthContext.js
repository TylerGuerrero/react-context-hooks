import React, { Component, createContext } from 'react'

// A Context tree
export const AuthContext = createContext();

class AuthContextProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
        }
    }

    toggleAuth = () => {
        this.setState({isAuthenticated: !this.state.isAuthenticated});
    }

    render () {
        return (
            // A wrapper to wrap the components that want access to the context which has the global state
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                {/* Adds the components to the context, places the components here */}
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider