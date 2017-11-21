import * as ui from '../actions/ui-state';
import { UIState } from "@app/state/ui";

const initialState: UIState = {
  showSidebar: true
};
export function reducer(state = initialState, action: ui.Actions): UIState {
  switch (action.type) {
    case ui.ActionTypes.OPEN_SIDEBAR:
      return {
        showSidebar: true
      };
    case ui.ActionTypes.CLOSE_SIDEBAR:
      return {
        showSidebar: false
      };
    default:
      return state;
  }
}

export const getShowSidebar = (state: UIState) => state.showSidebar;
