import { UserDTO } from "@dtos/UserDTO";
import { storageUserSave, storageUserGet } from "@storage/storageUser";
import { ReactNode, createContext, useEffect, useState } from "react";

export type AuthContextDataProps = {
    user: UserDTO;
    saveIsValidUser: (isValid: boolean) => void;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState({
        isValid: false
    });

    function saveIsValidUser() {
        try {
            setUser({ isValid: true });
            storageUserSave({ isValid: true });
        } catch (error) {
            throw error;
        }
    }

    async function loadIsValidUser() {
        const user = await storageUserGet();

        if (user){
            setUser(user);
        }
    }

    useEffect(() => {
        loadIsValidUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, saveIsValidUser }}>
            {children}
        </AuthContext.Provider>
    )
}