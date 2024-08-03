import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [userProfile, setUserProfile] = useState(null);

    return (
        <UserContext.Provider value={{ userProfile, setUserProfile }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}