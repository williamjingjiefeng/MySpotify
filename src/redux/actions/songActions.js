import * as SongApi from "../../api/songApi";
import { Dispatch } from "../dispatch/StaticDispatch.ts";

export function loadSongs() {
    return function (dispatch) {
        Dispatch.Preference.BeginApiCall();
        return SongApi
            .getSongs()
            .then(songs => {
                Dispatch.Preference.LoadSongs(songs)
            })
            .catch(error => {
                throw error;
            })
            .finally(() => {
                Dispatch.Preference.EndApiCall();
            });
    };
}

export function saveSong(song) {
    //eslint-disable-next-line no-unused-vars
    return function (dispatch, getState) {
        Dispatch.Preference.BeginApiCall();
        return SongApi
            .saveSong(song)
            .then(savedSong => {
                song.id
                    ? Dispatch.Preference.UpdateSong(savedSong)
                    : Dispatch.Preference.CreateSong(savedSong);
            })
            .catch(error => {
                throw error;
            })
            .finally(() => {
                Dispatch.Preference.EndApiCall();
            });
    };
}

export function deleteSong(song) {
    return function (dispatch) {
        // Doing optimistic delete, so not dispatching begin/end api call
        // actions, or apiCallError action since we're not showing the loading status for this.
        Dispatch.Preference.DeleteSong(song);
        return SongApi.deleteSong(song.id);
    };
}
