import * as types from "./actionTypes";
import * as singerApi from "../../api/singerApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadSingersSuccess(singers) {
  return { type: types.LOAD_SINGERS_SUCCESS, singers };
}

export function loadSingers() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return singerApi
      .getSingers()
      .then(singers => {
        dispatch(loadSingersSuccess(singers));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
