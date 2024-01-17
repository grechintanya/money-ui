import { createReducer, on } from "@ngrx/store";
import { OperationState } from "./operationState.interface";
import * as opActions from './actions';

export const initialOperationState: OperationState = {
    operations: [],
    error: null
};

export const operationReducer = createReducer(initialOperationState,
    on(opActions.getOperations, (state): OperationState => ({
        ...state, error: null
    })),
    on(opActions.getOperationsSuccess, (state, { operations }): OperationState => ({
        ...state, operations, error: null
    })),
    on(opActions.getOperationsFailure, (state, { error }): OperationState => ({
        ...state, error
    })),
);
