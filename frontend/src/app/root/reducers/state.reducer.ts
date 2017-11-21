import * as _ from "lodash";
import { AppState } from "app/root/typings/state";
import * as app from "../actions/store";
const initialState: AppState = {
    auth: null,
    loginPage: null,
    router: null,
    shop: null,
    ui: null
};
export function reducer(state = initialState, action: app.Actions): AppState {
    switch (action.type) {
        case app.ActionTypes.LOAD_SUCCESS:
            return {
                ...state
            };
        case app.ActionTypes.UPDATE_SUCCESS:
            return {
                ...state
            }
    }
}