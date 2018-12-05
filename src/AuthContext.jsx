import React from "react";

const state = {
    isAuthenticated : false,
    handleLoginSubmit : null
}

const AuthContext = React.createContext(state.isAuthenticated);

export default AuthContext;