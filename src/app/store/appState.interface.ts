import { AuthState } from "./auth/authState.interface";
import { CategoryState } from './categories/categoryState.interface';
import { AccountState } from './accounts/accountState.interface';
import { OperationState } from "./operations/operationState.interface";

export interface AppState {
    auth: AuthState,
    category: CategoryState,
    account: AccountState,
    operation: OperationState
}