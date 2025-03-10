import { createContext, ReactNode, useContext, useState } from "react";
import { AuthContextType, IsAuth, User } from "../types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User>(null);
    const [isAuth, setIsAuth] = useState<IsAuth>(null);

    const ctx = {
        user,
        setUser,
        userId: user?.id,

        isAuth,
        setIsAuth,
    };

    return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}

function useAuthContext() {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error("Auth Context must be used within AuthProvider");
    return context;
}

export { AuthProvider, useAuthContext };
