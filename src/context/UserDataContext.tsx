import { createContext, useContext } from "react";
import { useAuthContext } from "./AuthContext";

const UserDataContext = createContext({});

function UserDataProvider() {
    const { userId } = useAuthContext();
    console.log(userId);

    return (
        <UserDataContext.Provider value={{ userId }}></UserDataContext.Provider>
    );
}

function useUserDataContext() {
    const context = useContext(UserDataContext);

    if (!context)
        throw new Error("user Context was used outside the provider!!");

    return context;
}

export { UserDataProvider, useUserDataContext };
