import { onAuthStateChanged, User } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";

export const AuthContext = createContext<User | null>(null);
export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        })

        return () => {
            unsub();
        }
    }, []);

    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    )
}