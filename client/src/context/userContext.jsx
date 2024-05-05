import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchUserData() {
            try {
                const { data } = await axios.get('/profile');
                setUser(data);
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        }

        fetchUserData(); 

    }, []); 

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
