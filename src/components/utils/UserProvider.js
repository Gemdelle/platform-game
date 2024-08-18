import React, { createContext, useState, useContext } from 'react';
import levels from "../Library/Course1/data/levels";

const UserContext = createContext();

const LevelsContext = createContext();

export function UserProvider({ children }) {
    const [userProfile, setUserProfile] = useState(null);

    return (
        <UserContext.Provider value={{ userProfile, setUserProfile }}>
            {children}
        </UserContext.Provider>
    );
}

export function LevelsProvider({ children }) {
    const [userLevels, setUserLevels] = useState(levels);

    return (
        <LevelsContext.Provider value={{ userLevels, setUserLevels }}>
            {children}
        </LevelsContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}

export function useLevel() {
    return useContext(LevelsContext);
}

export function CombinedProvider({ children }) {
    return (
        <UserProvider>
            <LevelsProvider>
                {children}
            </LevelsProvider>
        </UserProvider>
    );
}
