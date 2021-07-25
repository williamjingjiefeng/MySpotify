import * as songApi from "../../api/songApi";
import { ISong } from "../dispatch/Song/Song";
import { Dispatch } from "../dispatch/StaticDispatch";
import { SongState } from "../dispatch/Song/SongState";
import { beginApiCall, endApiCall } from "./apiStatusActions";

export function loadSongs() {
    return function (dispatch?: React.Dispatch<any>) {
        if (dispatch) {
            dispatch(beginApiCall());
        } else {
            Dispatch.ApiCall.BeginApiCall(null);
        }
        return songApi
            .getSongs()
            .then(songs => {
                Dispatch.Song.loadSongs(songs);
            })
            .catch(error => {
                throw error;
            })
            .finally(() => {
                if (dispatch) {
                    dispatch(endApiCall());
                } else {
                    Dispatch.ApiCall.EndApiCall(null);
                }
            });
    };
}

export function saveSong(song: ISong) {
    //eslint-disable-next-line no-unused-vars
    return function (dispatch?: React.Dispatch<ISong>, getState?: () => SongState) {
        Dispatch.ApiCall.BeginApiCall(null);
        return songApi
            .saveSong(song)
            .then(savedSong => {
                song.id
                    ? Dispatch.Song.updateSong(savedSong)
                    : Dispatch.Song.createSong(savedSong);
            })
            .catch(error => {
                throw error;
            })
            .finally(() => {
                Dispatch.ApiCall.EndApiCall(null);
            });
    };
}

export function deleteSong(song: ISong) {
    return function (dispatch?: React.Dispatch<ISong>) {
        // Doing optimistic delete, so not dispatching begin/end api call
        // actions, or apiCallError action since we're not showing the loading status for this.
        Dispatch.Song.deleteSong(song);
        return songApi.deleteSong(song.id);
    };
}
