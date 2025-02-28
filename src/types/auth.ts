import { Dispatch, SetStateAction } from "react";

export type User = {
    id: string;
    name: string;
    email: string;
} | null;

export type AuthContextType = {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
    userId?: string;
};

export type LoginType = {
    email: string;
    password: string;
};
