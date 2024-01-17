import { createAction, props } from '@ngrx/store';
import { Operation } from 'src/app/utils';

export const getOperations = createAction('[Operation] Get Operations');
export const getOperationsSuccess = createAction('[Operation] Get Operations success', props<{ operations: Operation[] }>());
export const getOperationsFailure = createAction('[Operation] Get Operations failure', props<{ error: string }>());
