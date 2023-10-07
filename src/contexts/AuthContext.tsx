import { UserDTO } from "@dtos/UserDTO";
import { storageUserSave, storageUserGet } from "@storage/storageUser";

import '@utils/i18n/i18n';
import i18n from "@utils/i18n/i18n";

import { ReactNode, createContext, useEffect, useState } from "react";

export type AuthContextDataProps = {
    user: UserDTO;
    saveFirstAcessUser: () => void;
    isLoadingUserStorageData: boolean;
	updateLocalStorageUserNoLogged: () => void;
	updateLocalStorageUserLogged: () => void;
	exit: () => void;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<UserDTO>({} as UserDTO);
    const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true);

    function saveFirstAcessUser() {
        try {
            setUser({ showOnboarding: true, language: i18n.language, isLoggedIn: false, justInformation: false });
            storageUserSave({ showOnboarding: true, language: i18n.language, isLoggedIn: false, justInformation: false });
        } catch (error) {
            throw error;
        }
    }

	function updateLocalStorageUserNoLogged() {
        try {
            setUser({ showOnboarding: true, language: i18n.language, isLoggedIn: false, justInformation: true });
            storageUserSave({ showOnboarding: true, language: i18n.language, isLoggedIn: false, justInformation: true });
        } catch (error) {
            throw error;
        }
    }


	function exit() {
        try {
            setUser({ showOnboarding: true, language: i18n.language, isLoggedIn: false, justInformation: false });
            storageUserSave({ showOnboarding: true, language: i18n.language, isLoggedIn: false, justInformation: false });
        } catch (error) {
            throw error;
        }
    }

	function updateLocalStorageUserLogged() {
        try {
            setUser({ showOnboarding: true, language: i18n.language, isLoggedIn: true, justInformation: false });
            storageUserSave({ showOnboarding: true, language: i18n.language, isLoggedIn: true, justInformation: false });
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
        <AuthContext.Provider value={{ user, saveFirstAcessUser, isLoadingUserStorageData, updateLocalStorageUserNoLogged, updateLocalStorageUserLogged, exit }}>
            {children}
        </AuthContext.Provider>
    )
}