import { createReducer, on } from "@ngrx/store";
import { CategoryState } from "./categoryState.interface";
import * as categoryActions from './actions';

export const initialCategoryState: CategoryState = {
    categories: [],
    error: null
};

export const categoryReducer = createReducer(initialCategoryState,
    on(categoryActions.getCategoriesSuccess, (state, { categories }): CategoryState => ({
        ...state, categories, error: null
    })),
    on(categoryActions.getCategoriesFailure, (state, { error }): CategoryState => ({
        ...state, error
    })),
);
