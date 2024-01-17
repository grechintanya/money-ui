import { createReducer, on } from "@ngrx/store";
import { AccountState } from "./accountState.interface";
import * as accountActions from './actions';

export const initialAccountState: AccountState = {
    accounts: [],
    error: null,
    isLoading: false
};

export const accountReducer = createReducer(initialAccountState,
    on(accountActions.getAccounts, (state): AccountState => ({
        ...state, isLoading: true, error: null
    })),
    on(accountActions.getAccountsSuccess, (state, { accounts }): AccountState => ({
        ...state, accounts, error: null, isLoading: false
    })),
    on(accountActions.getAccountsFailure, (state, { error }): AccountState => ({
        ...state, error, isLoading: false
    })),
);
