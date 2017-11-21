import { Action } from '@ngrx/store';

import { Item } from "@shop/shop";

export const ActionTypes = {
  LOAD: '[Items] Load',
  LOAD_SUCCESS: '[Items] Load Success',
  LOAD_FAIL: '[Items] Load Fail'
};

export class LoadAction implements Action {
  readonly type = ActionTypes.LOAD;

  constructor(public payload?: number) { }
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload?: Item[]) { }
}

export class LoadFailAction implements Action {
  readonly type = ActionTypes.LOAD_FAIL;

  constructor(public payload?: string) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction;
