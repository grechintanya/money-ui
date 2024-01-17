import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/appState.interface';
import { authSelectors, authActions } from 'src/app/store';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    constructor(
        private store: Store<AppState>,
        private router: Router
    ) { }

    isAuth$!: Observable<boolean>;
    userName$!: Observable<string | undefined>;

    ngOnInit(): void {
        this.isAuth$ = this.store.select((authSelectors.selectIsAuth));
        if (this.isAuth$) {
            this.userName$ = this.store.select(authSelectors.selectUserName);
        }
    }

    onLogoutButtonClicked() {
        this.router.navigateByUrl('login');
        this.store.dispatch(authActions.logout());
    }
}
