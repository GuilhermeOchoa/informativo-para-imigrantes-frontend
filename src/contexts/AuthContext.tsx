import { UserDTO } from "@dtos/UserDTO";
import { api } from "@services/Api";
import { login } from "@services/Login";
import { storageAuthTokenGet, storageAuthTokenRemove, storageAuthTokenSave } from "@storage/storageAuthToken";
import { storageUserSave, storageUserGet } from "@storage/storageUser";

import '@utils/i18n/i18n';
import i18n from "@utils/i18n/i18n";

import { ReactNode, createContext, useEffect, useState } from "react";

export type AuthContextDataProps = {
    user: UserDTO;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    isLoadingUserStorageData: boolean;
    saveFirstAcessUser: () => void;
    updateLocalStorageUserNoLogged: () => void;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<UserDTO>({} as UserDTO);
    const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true);

    //Atualiza cabecalho de autenticacao
    async function userAndTokenUpdate(userData: UserDTO, token: string) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setUser({ showOnboarding: true, language: i18n.language, isLoggedIn: true, justInformation: false, email: userData.email, type: userData.type });
    }

    //...Salva no storage o usuario e o token
    async function storageUserAndTokenSave(userData: UserDTO, token: string) {
        try {
            setIsLoadingUserStorageData(true);

            await storageUserSave({ showOnboarding: true, language: i18n.language, isLoggedIn: true, justInformation: false, email: userData.email, type: userData.type });
            await storageAuthTokenSave(token);

        } catch (error) {
            throw error;
        } finally {
            setIsLoadingUserStorageData(false);
        }
    }

    //Autenticacao no app
    async function signIn(email: string, password: string) {
        try {
            //Buscar os dados do usuario
            const { data } = await login(email, password);

            //Se existir usuario e token...
            if (data.user && data.token) {
                //...Salva no storage o usuario e o token
                await storageUserAndTokenSave(data.user, data.token)
                //Atualiza o cabecalho
                userAndTokenUpdate(data.user, data.token);
            }
        } catch (error) {
            throw error;
        } finally {

        }
    }

    async function signOut() {
        try {
            setIsLoadingUserStorageData(true);

            saveFirstAcessUser();

            await storageAuthTokenRemove();
        } catch (error) {
            throw error;
        } finally {
            setIsLoadingUserStorageData(false);
        }
    }

    //Quando o usuario abre novamente o app, ele traz os dados para nao precisar logar novamente
    async function loadUserData() {
        try {
            setIsLoadingUserStorageData(true);

            const userLogged = await storageUserGet();
            const token = await storageAuthTokenGet();

            if (userLogged) {
                saveFirstAcessUser();
            }

            //Verifica se esta autenticado, se estiver tem token e os dados do usuario logado
            if (token && userLogged) {
                userAndTokenUpdate(userLogged, token);
            }

        } catch (error) {
            throw error;
        } finally {
            setIsLoadingUserStorageData(false);
        }
    }

    useEffect(() => {
        loadUserData();
    }, []);

    function saveFirstAcessUser() {
        try {
            setUser({ showOnboarding: true, language: i18n.language, isLoggedIn: false, justInformation: false, email: "", type: "" });
            storageUserSave({ showOnboarding: true, language: i18n.language, isLoggedIn: false, justInformation: false, email: "", type: "" });
        } catch (error) {
            throw error;
        }
    }

    function updateLocalStorageUserNoLogged() {
        try {
            setUser({ showOnboarding: true, language: i18n.language, isLoggedIn: false, justInformation: true, email: "", type: "" });
            storageUserSave({ showOnboarding: true, language: i18n.language, isLoggedIn: false, justInformation: true, email: "", type: "" });
        } catch (error) {
            throw error;
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            signIn,
            signOut,
            isLoadingUserStorageData,
            saveFirstAcessUser,
            updateLocalStorageUserNoLogged,
        }}>
            {children}
        </AuthContext.Provider>
    )
}