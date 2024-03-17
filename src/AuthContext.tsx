import React, { createContext, useState } from "react";

interface Props {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<Props>({
    isLoggedIn: false,
    setIsLoggedIn: () => {}
});

export const AuthProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Ось визначення

    return (
        <AuthContext.Provider 
        value={{
            isLoggedIn,
            setIsLoggedIn,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
