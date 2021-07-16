import * as singerApi from "../../api/singerApi";
import { Dispatch } from "../dispatch/StaticDispatch";
import { ISong } from "../dispatch/Songs/PreferenceState";

export function loadSingers() {
    return function (dispatch: React.Dispatch<ISong[]>) {
        Dispatch.Preference.BeginApiCall(null);
        return singerApi
            .getSingers()
            .then(singers => {
                Dispatch.Preference.LoadSingers(singers);
            })
            .catch(error => {
                throw error;
            })
            .finally(() => {
                Dispatch.Preference.EndApiCall(null);
            });
    };
}
