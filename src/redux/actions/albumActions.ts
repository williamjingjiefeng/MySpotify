import * as albumApi from "../../api/albumApi";
import { Dispatch } from "../dispatch/StaticDispatch";
import { IAlbum } from "../dispatch/Album/Album";

export function loadAlbums() {
    return function (dispatch?: React.Dispatch<IAlbum[]>) {
        //Dispatch.Preference.BeginApiCall(null);
        return albumApi
            .getAlbums()
            .then(albums => {
                Dispatch.Album.LoadAlbums(albums);
            })
            .catch(error => {
                throw error;
            })
            .finally(() => {
                //Dispatch.Preference.EndApiCall(null);
            });
    };
}
