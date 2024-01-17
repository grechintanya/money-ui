import { createAction, props } from '@ngrx/store';
import { Account } from 'src/app/utils';

export const getAccounts = createAction('[Account] Get Accounts');
export const getAccountsSuccess = createAction('[Account] Get Accounts success', props<{ accounts: Account[] }>());
export const getAccountsFailure = createAction('[Account] Get Accounts failure', props<{ error: string }>());
