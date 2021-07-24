import { ISong } from "./Song";

export interface SongState {
    Songs: ISong[];
}

export const DefaultSongs: SongState = {
    Songs: []
};