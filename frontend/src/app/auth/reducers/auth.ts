import * as _ from "lodash";
import { Security, User } from "@sf/auth";
import * as auth from "../actions/auth";

import { AuthState } from "app/auth/typings/auth.state";

const initialState: AuthState = {
  loggedIn: false,
  user: null,
  userRoles: null
};

export function reducer(state = initialState, action: auth.Actions): AuthState {
  switch (action.type) {
    case auth.ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: _.clone(action.payload)
      };
    case auth.ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loggedIn: false,
        user: _.clone(action.payload)
      };
    case auth.ActionTypes.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: null
      };

    case auth.ActionTypes.USER_ROLES_SUCCESS:
      return {
        ...state,
        userRoles: _.clone(action.payload)
      };

    default:
      return state;
  }
}

export const getLoggedIn = (state: AuthState) => state.loggedIn;
export const getUser = (state: AuthState) => state.user;
export const getUserRoles = (state: AuthState) => state.userRoles;
