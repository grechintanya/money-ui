import { User } from "../../utils";

export interface AuthState {
    isAuthenticated: boolean,
    user: User,
    isLoading: boolean,
    error: string | null
}
