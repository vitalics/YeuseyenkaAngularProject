import { Action } from '@ngrx/store';

import { LoadFailAction } from 'app/shop/actions/items';
import { AppState } from 'app/root/typings/state';

export const ActionTypes = {
    LOAD: '[STORE] Load',
    LOAD_SUCCESS: '[STORE] Load success',
    LOAD_FAILURE: '[STORE] Load failure',
    UPDATE: '[STORE] Update ',
    UPDATE_SUCCESS: '[STORE] Update success',
    UPDATE_FAILURE: '[STORE] Update failure'
};

export class LoadAction implements Action {
    readonly type = ActionTypes.LOAD;

    constructor(public payload?: string) { }
}

export class LoadSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_SUCCESS;

    constructor(public payload?: AppState) { }
}

export class LoadFailureAction implements Action {
    readonly type = ActionTypes.LOAD_FAILURE;

    constructor(public payload?: string) { }
}
export class UpdateAction implements Action {
    readonly type = ActionTypes.UPDATE;

    constructor(public payload: AppState) { }
}

export class UpdateSuccessAction implements Action {
    readonly type = ActionTypes.UPDATE_SUCCESS;

    constructor(public payload?: AppState) { }
}

export class UpdateFailureAction implements Action {
    readonly type = ActionTypes.UPDATE_FAILURE;

    constructor(public payload?: string) { }
}


export type Actions =
    | LoadAction
    | LoadFailAction
    | LoadSuccessAction
    | UpdateAction
    | UpdateFailureAction
    | UpdateSuccessAction;
