import React, {useState} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false
});

const {Provider} = AuthContext;

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Provider value={{isLoggedIn, setIsLoggedIn}}>{children}</Provider>
    )
}

export {AuthProvider, AuthContext};