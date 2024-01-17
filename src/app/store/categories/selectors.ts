import { createSelector } from "@ngrx/store";
import { AppState } from "../appState.interface";

export const selectCategory = (state: AppState) => state.category;

export const selectExpenseCategory = createSelector(selectCategory, (state) => {
    return state.categories.filter((category) => category?.type === 'expense')
});

export const selectIncomeCategory = createSelector(selectCategory, (state) => {
    return state.categories.filter((category) => category?.type === 'income')
});

export const selectCategoryById = (id: string | undefined) => createSelector(selectCategory, (state) => {
    if (id) return state.categories.find(category => category._id === id);
    return null;
});

export const selectError = createSelector(selectCategory, (state) => state.error);
