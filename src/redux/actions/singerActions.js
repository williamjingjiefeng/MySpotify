import * as types from "./actionTypes";
import * as singerApi from "../../api/singerApi";
import { Dispatch } from "../dispatch/StaticDispatch.ts";

export function loadSingers() {
    return function (dispatch) {
        Dispatch.Preference.BeginApiCall();
        return singerApi
            .getSingers()
            .then(singers => {
                Dispatch.Preference.LoadSingers(singers);
            })
            .catch(error => {
                throw error;
            })
            .finally(() => {
                Dispatch.Preference.EndApiCall();
            })
    };
}
