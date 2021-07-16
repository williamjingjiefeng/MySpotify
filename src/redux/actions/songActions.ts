import * as songApi from "../../api/songApi";
import { ISong } from "../dispatch/Songs/PreferenceState";
import { Dispatch } from "../dispatch/StaticDispatch";
import { PreferenceState } from "../dispatch/Songs/PreferenceState";

export function loadSongs() {
    return function (dispatch: React.Dispatch<ISong[]>) {
        Dispatch.Preference.BeginApiCall(null);
        return songApi
            .getSongs()
            .then(songs => {
                Dispatch.Preference.LoadSongs(songs);
            })
            .catch(error => {
                throw error;
            })
            .finally(() => {
                Dispatch.Preference.EndApiCall(null);
            });
    };
}

export function saveSong(song: ISong) {
    //eslint-disable-next-line no-unused-vars
    return function (dispatch: React.Dispatch<ISong>, getState: ()=> PreferenceState) {
        Dispatch.Preference.BeginApiCall(null);
        return songApi
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
                Dispatch.Preference.EndApiCall(null);
            });
    };
}

export function deleteSong(song: ISong) {
    return function (dispatch: React.Dispatch<ISong>) {
        // Doing optimistic delete, so not dispatching begin/end api call
        // actions, or apiCallError action since we're not showing the loading status for this.
        Dispatch.Preference.DeleteSong(song);
        return songApi.deleteSong(song.id);
    };
}
