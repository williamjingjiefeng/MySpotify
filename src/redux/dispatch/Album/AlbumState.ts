import { IAlbum } from "./Album";

export interface AlbumState {
    Albums: IAlbum[];
};

export const DefaultAlbums: AlbumState = {
    Albums: []
};