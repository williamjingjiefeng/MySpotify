import { SongState } from "./dispatch/Song/SongState";
import { SingerState } from "./dispatch/Singer/SingerState";
import { AlbumState } from "./dispatch/Album/AlbumState";
import { UIState } from "./dispatch/UI/UIState";

export interface IAppState {
    Song: SongState;
    Singer: SingerState;
    Album: AlbumState;
    UI: UIState;
};
