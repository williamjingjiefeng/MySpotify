import { SongDispatcher } from "./Song/SongRedux";
import { SingerDispatcher } from "./Singer/SingerRedux";
import { AlbumDispatcher } from "./Album/AlbumRedux";
import { UIDispatcher } from "./UI/UIRedux";

/**
 * Global access to Redux action dispatch.
 * There is one property per state slice.
 */
export const Dispatch = {

    /** Song list dispatcher in the application. */
    Song: SongDispatcher,

    /** Singer list dispatcher in the application. */
    Singer: SingerDispatcher,

    /** Album list dispatcher in the application. */
    Album: AlbumDispatcher,

    /** UI dispatcher dispatcher in the application. */
    UI: UIDispatcher
};