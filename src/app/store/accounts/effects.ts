import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AccountService } from 'src/app/services';
import { Account } from 'src/app/utils';
import * as accountAction from './actions';

@Injectable()

export class AccountEffects {
    constructor(
        private actions$: Actions,
        private accountService: AccountService
    ) { }

    getAccounts$ = createEffect(() => {
        return this.actions$.pipe(ofType(accountAction.getAccounts),
            switchMap(() => {
                return this.accountService.getAllAccounts()
                    .pipe(
                        map((accounts) => accountAction.getAccountsSuccess({ accounts: accounts as Account[] })),
                        catchError((error) => of(accountAction.getAccountsFailure({ error: error.error })))
                    )
            })

        )
    });

}