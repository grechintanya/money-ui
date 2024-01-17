import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent, NavigationComponent, ButtonComponent } from './shared';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import {
  AuthEffects, authReducer,
  CategoryEffects, categoryReducer,
  AccountEffects, accountReducer,
  OperationEffects, operationReducer
} from './store';

import { AuthService, AuthInterceptor } from './services';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    NavigationComponent,
    ControlPanelComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      auth: authReducer,
      category: categoryReducer,
      account: accountReducer,
      operation: operationReducer
    }),
    EffectsModule.forRoot([AuthEffects, CategoryEffects, AccountEffects, OperationEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
