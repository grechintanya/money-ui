import { createSelector } from "@ngrx/store";
import { AppState } from "../appState.interface";

const selectAccount = (state: AppState) => state.account;

export const selectAccontsList = createSelector(selectAccount, (state) => state.accounts);

export const selectAccountById = (id: string | undefined) => createSelector(selectAccount,
    (state) => {
        if (id) return state.accounts.find(account => account._id === id);
        return null;
    });

