import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function singerReducer(state = initialState.singers, action) {
  switch (action.type) {
    case types.LOAD_SINGERS_SUCCESS:
      return action.singers;
    default:
      return state;
  }
}
