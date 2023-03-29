import React, {useState} from 'react';

const UserContext = React.createContext({
    user: {}
});

const {Provider} = UserContext;

const UserProvider = ({children}) => {
    const [user, setUser] = useState();
    return (
        <Provider value={{user, setUser}}>{children}</Provider>
    )
}

export {UserProvider, UserContext};