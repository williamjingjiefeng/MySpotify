export const CREATE_SONG = "CREATE_SONG";
export const LOAD_SONGS_SUCCESS = "LOAD_SONGS_SUCCESS";
export const LOAD_SINGERS_SUCCESS = "LOAD_SINGERS_SUCCESS";
export const LOAD_ALBUMS_SUCCESS = "LOAD_ALBUMS_SUCCESS";
export const CREATE_SONG_SUCCESS = "CREATE_SONG_SUCCESS";
export const UPDATE_SONG_SUCCESS = "UPDATE_SONG_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const END_API_CALL = "END_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the delete request begins.
export const DELETE_SONG_OPTIMISTIC = "DELETE_SONG_OPTIMISTIC";
