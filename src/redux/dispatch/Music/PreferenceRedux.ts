import { DefaultPreference, ISong, ISinger, IAlbum, PreferenceState } from "./PreferenceState";
import { DispatchBuilder } from "../DispatchBuilder";
import * as actionTypes from "../../actions/actionTypes";

/** defines the actions and reducers for the Preference store slice */
const builder = new DispatchBuilder<PreferenceState>("Preference", DefaultPreference);

/** An object which dispatches all the preference actions */
export const PreferenceDispatcher = {
    BeginApiCall: builder.AddAction(actionTypes.BEGIN_API_CALL, BeginApiCall),

    EndApiCall: builder.AddAction(actionTypes.END_API_CALL, EndApiCall),

    LoadSongs: builder.AddAction(actionTypes.LOAD_SONGS_SUCCESS, LoadSongs),

    CreateSong: builder.AddAction(actionTypes.CREATE_SONG_SUCCESS, CreateSong),

    UpdateSong: builder.AddAction(actionTypes.UPDATE_SONG_SUCCESS, UpdateSong),

    DeleteSong: builder.AddAction(actionTypes.DELETE_SONG_OPTIMISTIC, DeleteSong),

    LoadSingers: builder.AddAction(actionTypes.LOAD_SINGERS_SUCCESS, LoadSingers),

    LoadAlbums: builder.AddAction(actionTypes.LOAD_ALBUMS_SUCCESS, LoadAlbums)
};

/** The reducer for the Preference state slice  */
export const PreferenceReducer = builder.MakeReducer();

function BeginApiCall(state: PreferenceState): PreferenceState {
    return {
        ...state,
        ApiCallsInProgress: state.ApiCallsInProgress + 1
    }
}

function EndApiCall(state: PreferenceState): PreferenceState {
    return {
        ...state,
        ApiCallsInProgress: state.ApiCallsInProgress - 1
    }
}

function LoadSongs(state: PreferenceState, songs: ISong[]): PreferenceState {
    return {
        ...state,
        Songs: songs,
    };
}

function CreateSong(state: PreferenceState, song: ISong): PreferenceState {

    return {
        ...state,
        Songs: [...state.Songs, song]
    };
}

function UpdateSong(state: PreferenceState, song: ISong): PreferenceState {

    return {
        ...state,
        Songs: state.Songs.map(z => z.id === song.id ? song : z)
    };
}

function DeleteSong(state: PreferenceState, song: ISong): PreferenceState {

    return {
        ...state,
        Songs: state.Songs.filter(z => z.id !== song.id)
    };
}

function LoadSingers(state: PreferenceState, singers: ISinger[]): PreferenceState {
    return {
        ...state,
        Singers: singers,
    };
}

function LoadAlbums(state: PreferenceState, albums: IAlbum[]): PreferenceState {
    return {
        ...state,
        Albums: albums,
    };
}
