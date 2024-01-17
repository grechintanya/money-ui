import { Component, OnInit } from "@angular/core";
import { authSelectors } from '../../store';
import { Observable } from 'rxjs';
import { AppState } from "src/app/store/appState.interface";
import { Store } from "@ngrx/store";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
    isAuth$!: Observable<boolean>;

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        this.isAuth$ = this.store.select(authSelectors.selectIsAuth);
    }


}