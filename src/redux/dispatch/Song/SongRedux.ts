import { DispatchBuilder } from "../DispatchBuilder";
import * as actionTypes from "../../../redux/actions/actionTypes";
import { ISong } from "./Song";
import { SongState, DefaultSongs } from "./SongState";

/** defines the actions and reducers for the Song store slice */
const builder = new DispatchBuilder<SongState>("Song", DefaultSongs);

/** An object which dispatches all the Song related actions */
export const SongDispatcher = {
    loadSongs: builder.AddAction(actionTypes.LOAD_SONGS_SUCCESS, loadSongs),
    updateSong: builder.AddAction(actionTypes.UPDATE_SONG_SUCCESS, updateSong),
    createSong: builder.AddAction(actionTypes.CREATE_SONG_SUCCESS, createSong),
    deleteSong: builder.AddAction(actionTypes.DELETE_SONG_OPTIMISTIC, deleteSong)
}

/** The reducer for the Song state slice  */
export const SongReducer = builder.MakeReducer();

/** Load all songs. */
function loadSongs(state: SongState, songs: ISong[]): SongState {
    return {
        ...state,
        Songs: songs
    };
};

/** Update the specified song. */
function updateSong(state: SongState, song: ISong): SongState {
    return {
        ...state,
        Songs: state.Songs.map(z => z.id === song.id ? song : z)
    };
};

/** Create a new song and add it to the song list. */
function createSong(state: SongState, song: ISong): SongState {
    return {
        ...state,
        Songs: [...state.Songs, song]
    };
};

/** Delete the selected song. */
function deleteSong(state: SongState, song: ISong): SongState {
    return {
        ...state,
        Songs: state.Songs.filter(z => z.id !== song.id)
    };
};