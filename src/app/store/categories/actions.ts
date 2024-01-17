import { createAction, props } from '@ngrx/store';
import { Category } from 'src/app/utils';

export const getCategories = createAction('[Category] Get Categories');
export const getCategoriesSuccess = createAction('[Category] Get Categories success', props<{ categories: Category[] }>());
export const getCategoriesFailure = createAction('[Category] Get Categories failure', props<{ error: string }>());
