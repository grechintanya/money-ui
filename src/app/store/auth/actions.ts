import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/utils';

export const login = createAction('[Auth] Login', props<{ email: string, password: string }>());
export const loginSuccess = createAction('[Auth] Login success', props<{ user: User }>());
export const loginFailure = createAction('[Auth] Login failure', props<{ error: string }>());

export const logout = createAction('[Auth] Logout');

export const errorMessageClosed = createAction('[Auth] Error message closed');
