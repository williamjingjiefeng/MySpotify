import * as types from "./actionTypes";
import * as SongApi from "../../api/songApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadSongSuccess(songs) {
  return { type: types.LOAD_SONGS_SUCCESS, songs };
}

export function createSongSuccess(song) {
  return { type: types.CREATE_SONG_SUCCESS, song };
}

export function updateSongSuccess(song) {
  return { type: types.UPDATE_SONG_SUCCESS, song };
}

export function deleteSongOptimistic(song) {
  return { type: types.DELETE_SONG_OPTIMISTIC, song };
}

export function loadSongs() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return SongApi
      .getSongs()
      .then(songs => {
        dispatch(loadSongSuccess(songs));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveSong(song) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return SongApi
      .saveSong(song)
      .then(savedSong => {
        song.id
          ? dispatch(updateSongSuccess(savedSong))
          : dispatch(createSongSuccess(savedSong));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteSong(song) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteSongOptimistic(song));
    return SongApi.deleteSong(song.id);
  };
}
