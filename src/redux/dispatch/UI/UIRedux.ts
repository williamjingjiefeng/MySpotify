import { DispatchBuilder } from "../DispatchBuilder";
import * as actionTypes from "../../actions/actionTypes";
import { UIState, DefaultUIState } from "./UIState";

const builder = new DispatchBuilder<UIState>("UI", DefaultUIState);

export const UIDispatcher = {
    BeginApiCall: builder.AddAction(actionTypes.BEGIN_API_CALL, beginApiCall),
    EndApiCall: builder.AddAction(actionTypes.END_API_CALL, endApiCall)
}

function beginApiCall(state: UIState): UIState {
    return {
        ...state,
        ApiCallInProgress: state.ApiCallInProgress + 1
    };
}

function endApiCall(state: UIState): UIState {
    return {
        ...state,
        ApiCallInProgress: state.ApiCallInProgress - 1
    };
}

export const UIReducer = builder.MakeReducer();