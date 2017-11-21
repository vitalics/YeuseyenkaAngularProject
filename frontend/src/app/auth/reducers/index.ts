import { createReducer, State as AppState } from '../../shared/reducers';
import { createSelector } from 'reselect';
import * as fromAuth from './auth';
import * as fromLoginPage from './login-page';
import { ActionReducer } from '@ngrx/store';

import { AuthState } from 'app/auth/typings/auth.state';
import { LoginPageState } from 'app/auth/typings/loginpage.state';
export interface AuthState2 extends AppState {
  auth: AuthState;
  loginPage: LoginPageState;
}
export const reducers = {
  auth: fromAuth.reducer,
  loginPage: fromLoginPage.reducer,
};
export const extendedReducer: ActionReducer<AppState> = createReducer(reducers);

export const getStatusState = (state: AuthState2) => state.auth;
export const getLoginPageState = (state: AuthState2) => state.loginPage;

export const getUser = createSelector(getStatusState, fromAuth.getUser);
export const getLoggedIn = createSelector(getStatusState, fromAuth.getLoggedIn);
export const getError = createSelector(getLoginPageState, fromLoginPage.getError);
export const getPending = createSelector(getLoginPageState, fromLoginPage.getPending);

export const getUserRoles = createSelector(getStatusState, fromAuth.getUserRoles);
