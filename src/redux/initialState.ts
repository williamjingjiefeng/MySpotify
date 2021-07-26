import { DefaultSongs } from "./dispatch/Song/SongState";
import { DefaultSingers } from "./dispatch/Singer/SingerState";
import { DefaultAlbums } from "./dispatch/Album/AlbumState";
import { DefaultUIState } from "./dispatch/UI/UIState";
import { IAppState } from "./AppState";

export const InitAppState: IAppState = {
    Song: DefaultSongs,
    Singer: DefaultSingers,
    Album: DefaultAlbums,
    UI: DefaultUIState
};