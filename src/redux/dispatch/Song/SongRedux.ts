import { DispatchBuilder } from "../DispatchBuilder";
import * as actionTypes from "../../../redux/actions/actionTypes";
import { ISong } from "./Song";
import { SongState, DefaultSongs } from "./SongState";

const builder = new DispatchBuilder<SongState>("Song", DefaultSongs);

export const SongDispatcher = {
    loadSongs: builder.AddAction(actionTypes.LOAD_SONGS_SUCCESS, loadSongs),
    updateSong: builder.AddAction(actionTypes.UPDATE_SONG_SUCCESS, updateSong),
    createSong: builder.AddAction(actionTypes.CREATE_SONG_SUCCESS, createSong),
    deleteSong: builder.AddAction(actionTypes.DELETE_SONG_OPTIMISTIC, deleteSong)
}

export const SongReducer = builder.MakeReducer();

function loadSongs(state: SongState, songs: ISong[]): SongState {
    return {
        ...state,
        Songs: songs
    };
};

function updateSong(state: SongState, song: ISong): SongState {
    return {
        ...state,
        Songs: state.Songs.map(z => z.id === song.id ? song : z)
    };
};

function createSong(state: SongState, song: ISong): SongState {
    return {
        ...state,
        Songs: [...state.Songs, song]
    };
};

function deleteSong(state: SongState, song: ISong): SongState {
    return {
        ...state,
        Songs: state.Songs.filter(z => z.id !== song.id)
    };
};