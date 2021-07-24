import { AlbumState, DefaultAlbums } from "./AlbumState";
import { DispatchBuilder } from "../DispatchBuilder";
import * as actionTypes from "../../actions/actionTypes";
import { IAlbum } from "./Album";

/** defines the actions and reducers for the Album store slice */
const builder = new DispatchBuilder<AlbumState>("Album", DefaultAlbums);

/** An object which dispatches all the album actions */
export const AlbumDispatcher = {
    LoadAlbums: builder.AddAction(actionTypes.LOAD_ALBUMS_SUCCESS, loadAlbums)
};

/** The reducer for the Preference state slice  */
export const AlbumReducer = builder.MakeReducer();

function loadAlbums(state: AlbumState, albums: IAlbum[]): AlbumState {
    return {
        ...state,
        Albums: albums,
    };
}
