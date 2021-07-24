import * as types from "../actions/actionTypes";
import { InitAppState } from "./initialState";
import { Action } from "redux";

export default function apiCallStatusReducer(state = InitAppState.ApiCallsInProgress, action: Action<any>) {
    if (action.type === types.BEGIN_API_CALL) {
        return state + 1;
    } else if (action.type === types.END_API_CALL) {
        return state - 1;
    }

    return state;
}
