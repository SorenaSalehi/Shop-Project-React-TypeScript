import {
    type User as SupabaseUser,
    type WeakPassword,
    type Session,
} from "@supabase/supabase-js";
import { Dispatch, SetStateAction } from "react";

export type User = {
    id: string;
    name?: string;
    email: string;
} | null;
export type IsAuth = {
    user: SupabaseUser;
    session: Session;
    weakPassword?: WeakPassword | undefined;
} | null;

export type AuthContextType = {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
    userId?: string;

    isAuth: IsAuth;
    setIsAuth: Dispatch<SetStateAction<IsAuth>>;
};

export type LoginType = {
    email: string;
    password: string;
};
