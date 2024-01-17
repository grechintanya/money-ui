import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService } from 'src/app/services';
import { User } from 'src/app/utils';
import * as AuthActions from './actions';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.login),
            switchMap((action) => {
                return this.authService
                    .login({ email: action.email, password: action.password })
                    .pipe(
                        map((user) => {
                            this.router.navigateByUrl('/');
                            return AuthActions.loginSuccess({ user: user as User });
                        }),
                        catchError((error) =>
                            of(AuthActions.loginFailure({ error: error.error }))
                        )
                    );
            }),
        );
    });

}
