import * as singerApi from "../../api/singerApi";
import { Dispatch } from "../dispatch/StaticDispatch";
import { DefaultUIState } from "../dispatch/UI/UIState";
import { beginApiCall, endApiCall } from "./apiStatusActions";

export function loadSingers() {
    return function (dispatch?: React.Dispatch<any>) {
        if (dispatch) {
            dispatch(beginApiCall());
        } else {
            Dispatch.UI.BeginApiCall(DefaultUIState);
        }
        return singerApi
            .getSingers()
            .then(singers => {
                Dispatch.Singer.LoadSingers(singers);
            })
            .catch(error => {
                throw error;
            })
            .finally(() => {
                if (dispatch) {
                    dispatch(endApiCall());
                } else {
                    Dispatch.UI.EndApiCall(DefaultUIState);
                }
            });
    };
}
