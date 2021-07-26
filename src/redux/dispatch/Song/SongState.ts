import { ISong } from "./Song";

/** 
 * Song list stored in the application.
 * Redux state for the "Song" slice.
 */
export interface SongState {
    Songs: ISong[];
}

/** Default value of the Song slice. */
export const DefaultSongs: SongState = {
    Songs: []
};