import { Account } from "../../utils";

export interface AccountState {
    accounts: Account[],
    isLoading: boolean,
    error: string | null
}
