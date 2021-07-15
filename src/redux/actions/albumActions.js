import * as albumApi from "../../api/albumApi";
import { Dispatch } from "../dispatch/StaticDispatch.ts";

export function loadAlbums() {
    return function (dispatch) {
        Dispatch.Preference.BeginApiCall();
        return albumApi
            .getAlbums()
            .then(albums => {
                Dispatch.Preference.LoadAlbums(albums);
            })
            .catch(error => {
                throw error;
            })
            .finally(() => {
                Dispatch.Preference.EndApiCall();
            });
    };
}
