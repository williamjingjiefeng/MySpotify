import { DispatchBuilder } from "../DispatchBuilder";
import * as actionTypes from "../../actions/actionTypes";
import { ApiState, DefaultApiState } from "./ApiState";

const builder = new DispatchBuilder<ApiState>("Api", DefaultApiState);

export const ApiCallDispatcher = {
    BeginApiCall: builder.AddAction(actionTypes.BEGIN_API_CALL, beginApiCall),
    EndApiCall: builder.AddAction(actionTypes.END_API_CALL, endApiCall)
}

function beginApiCall(state: ApiState): ApiState {
    return {
        ...state,
        ApiCallInProgress: state.ApiCallInProgress + 1
    };
}

function endApiCall(state: ApiState): ApiState {
    return {
        ...state,
        ApiCallInProgress: state.ApiCallInProgress - 1
    };
}

export const ApiCallReducer = builder.MakeReducer();