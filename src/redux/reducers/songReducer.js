import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function songReducer(state = initialState.Preference.Songs, action) {
  switch (action.type) {
    case types.CREATE_SONG_SUCCESS:
      return [...state, { ...action.song }];
    case types.UPDATE_SONG_SUCCESS:
      return state.map(song =>
        song.id === action.song.id ? action.song : song
      );
    case types.LOAD_SONGS_SUCCESS:
      return action.songs;
    case types.DELETE_SONG_OPTIMISTIC:
      return state.filter(song => song.id !== action.song.id);
    default:
      return state;
  }
}
