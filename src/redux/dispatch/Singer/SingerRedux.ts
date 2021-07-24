import { DispatchBuilder } from "../DispatchBuilder";
import { SingerState, DefaultSingers } from "./SingerState";
import * as actionTypes from "../../actions/actionTypes";
import { ISinger } from "./Singer";

const builder = new DispatchBuilder<SingerState>("Singer", DefaultSingers);

export const SingerDispatcher = {
    LoadSingers: builder.AddAction(actionTypes.LOAD_SINGERS_SUCCESS, loadSingers),
    UpdateSinger: builder.AddAction(actionTypes.UPDATE_SONG_SUCCESS, updateSinger),
    CreateSinger: builder.AddAction(actionTypes.CREATE_SONG_SUCCESS, createSinger),
    DeleteSinger: builder.AddAction(actionTypes.DELETE_SONG_OPTIMISTIC, deleteSinger)
}

function loadSingers(state: SingerState, singers: ISinger[]): SingerState {
    return {
        ...state,
        Singers: singers
    };
}

function updateSinger(state: SingerState, singer: ISinger): SingerState {
    return {
        ...state,
        Singers: state.Singers.map(z => z.id === singer.id ? singer : z)
    };
}

function createSinger(state: SingerState, singer: ISinger): SingerState {
    return {
        ...state,
        Singers: [...state.Singers, singer]
    };
}

function deleteSinger(state: SingerState, singer: ISinger): SingerState {
    return {
        ...state,
        Singers: state.Singers.filter(z => z.id !== singer.id)
    };
}

export const SingerReducer = builder.MakeReducer();