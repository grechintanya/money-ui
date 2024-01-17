import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { OperationService } from 'src/app/services';
import { Operation } from 'src/app/utils';
import * as opActions from './actions';

@Injectable()

export class OperationEffects {
    constructor(
        private actions$: Actions,
        private operationService: OperationService
    ) { }

    getOperations$ = createEffect(() => {
        return this.actions$.pipe(ofType(opActions.getOperations),
            switchMap(() => {
                return this.operationService.getAllOperations()
                    .pipe(
                        map((operations) => opActions.getOperationsSuccess({ operations: operations as Operation[] })),
                        catchError((error) => of(opActions.getOperationsFailure({ error: error.error })))
                    )
            })

        )
    });

}