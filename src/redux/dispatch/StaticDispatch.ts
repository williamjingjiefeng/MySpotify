import { SongDispatcher } from "./Song/SongRedux";
import { SingerDispatcher } from "./Singer/SingerRedux";
import { AlbumDispatcher } from "./Album/AlbumRedux";
import { UIDispatcher } from "./UI/UIRedux";

/**
 * Global access to Redux action dispatch.
 * There is one property per state slice.
 */
export const Dispatch = {
    Song: SongDispatcher,
    Singer: SingerDispatcher,
    Album: AlbumDispatcher,
    UI: UIDispatcher
};