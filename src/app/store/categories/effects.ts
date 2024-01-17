import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CategoryService } from 'src/app/services';
import { Category } from 'src/app/utils';
import * as categoryActions from './actions';

@Injectable()

export class CategoryEffects {
    constructor(
        private actions$: Actions,
        private categoryService: CategoryService
    ) { }

    getCategories$ = createEffect(() => {
        return this.actions$.pipe(ofType(categoryActions.getCategories),
            switchMap(() => {
                return this.categoryService.getAllCategories()
                    .pipe(
                        map((categories) => categoryActions.getCategoriesSuccess({ categories: categories as Category[] })),
                        catchError((error) => of(categoryActions.getCategoriesFailure({ error: error.error })))
                    )
            })

        )
    });

}