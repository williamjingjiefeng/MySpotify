import * as singerApi from "../../api/singerApi";
import { Dispatch } from "../dispatch/StaticDispatch";
import { ISinger } from "../dispatch/Singer/Singer";

export function loadSingers() {
    return function (dispatch?: React.Dispatch<ISinger[]>) {
        Dispatch.ApiCall.BeginApiCall(null);
        return singerApi
            .getSingers()
            .then(singers => {
                Dispatch.Singer.LoadSingers(singers);
            })
            .catch(error => {
                throw error;
            })
            .finally(() => {
                Dispatch.ApiCall.EndApiCall(null);
            });
    };
}
