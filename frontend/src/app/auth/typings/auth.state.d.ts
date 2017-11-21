import { User } from "@sf/auth";

export interface AuthState {
    loggedIn: boolean;
    user: User | null;
    userRoles: number | null;
}