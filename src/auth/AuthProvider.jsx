import React, { createContext, useState } from "react";

// Create a new context for authentication
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // State to track the user's authentication status
    const [authToken, setAuthToken] = useState("");
    const [userDetails, setUserDetails] = useState({});

    const login = (details, token) => {
        setUserDetails(details);
        setAuthToken(token);
        return true;
    };

    const logout = () => {
        setAuthToken("");
        setUserDetails({});
    };

    // Provide the authentication state and login/logout functions to the child components
    return (
        <AuthContext.Provider value={{ authToken, userDetails, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
