import { UserDTO } from "@dtos/UserDTO";
import { storageUserSave, storageUserGet } from "@storage/storageUser";

import '@utils/i18n/i18n';
import i18n from "@utils/i18n/i18n";

import { ReactNode, createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export type AuthContextDataProps = {
    user: UserDTO;
    saveIsValidUser: (isValid: boolean) => void;
    isLoadingUserStorageData: boolean;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<UserDTO>({} as UserDTO);
    const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true);

    function saveIsValidUser() {
        try {
            setUser({ isValid: true, language: i18n.language });
            storageUserSave({ isValid: true, language: i18n.language });
        } catch (error) {
            throw error;
        }
    }

    async function loadIsValidUser() {
        try {
            const user = await storageUserGet();

            if (user) {
                setUser(user);
                setIsLoadingUserStorageData(false);
            }
        } catch (error) {
            throw error;
        } finally {
            setIsLoadingUserStorageData(false);
        }
    }

    useEffect(() => {
        loadIsValidUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, saveIsValidUser, isLoadingUserStorageData }}>
            {children}
        </AuthContext.Provider>
    )
}