import { createSelector } from "@ngrx/store";
import { AppState } from "../appState.interface";

const selectOperation = (state: AppState) => state.operation;

export const selectOpList = createSelector(selectOperation, (state) => state.operations);
