import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { StateService } from '../services/state.service';
import * as state from '../actions/store';

import { } from "@app/state";
import { AppState } from 'app/root/typings/state';

@Injectable()
export class StateEffectsService {
    @Effect()
    loadState$: Observable<Action> = this.actions$
        .ofType(state.ActionTypes.LOAD)
        .switchMap((action: state.LoadAction) => this.storeService.getStoreState())
        .map((payload: AppState) => new state.LoadSuccessAction(payload))
        .catch(() => of(new state.LoadFailureAction('Failed to load state')));

    @Effect({ dispatch: false })
    loadStateFail$: Observable<Action> = this.actions$
        .ofType(state.ActionTypes.LOAD_FAILURE)
        .do((action: state.LoadFailureAction) => console.error(action.payload));

    @Effect()
    updateState$ = this.actions$
        .ofType(state.ActionTypes.UPDATE)
        .map(action => action.payload)
        .switchMap((action: state.UpdateAction) => this.storeService.postStoreState(action.payload))
        .map((payload: AppState) => new state.UpdateSuccessAction(payload))
        .catch(() => of(new state.UpdateFailureAction('failed to load state')));

    @Effect({ dispatch: false })
    updateStateFailure$ = this.actions$
        .ofType(state.ActionTypes.UPDATE_FAILURE)
        .do((action: state.UpdateFailureAction) => console.error(action.payload));

    constructor(private actions$: Actions,
        private storeService: StateService) { }
}
