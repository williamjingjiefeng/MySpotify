import * as types from "./actionTypes";
import * as albumApi from "../../api/albumApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadAlbumsSuccess(albums) {
  return { type: types.LOAD_ALBUMS_SUCCESS, albums: albums };
}

export function loadAlbums() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return albumApi
      .getAlbums()
      .then(albums => {
        dispatch(loadAlbumsSuccess(albums));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
