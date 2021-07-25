import { DefaultSongs } from "./dispatch/Song/SongState";
import { DefaultSingers } from "./dispatch/Singer/SingerState";
import { DefaultAlbums } from "./dispatch/Album/AlbumState";
import { DefaultApiState } from "./dispatch/ApiCall/ApiState";
import { IAppState } from "./AppState";

export const InitAppState: IAppState = {
    Song: DefaultSongs,
    Singer: DefaultSingers,
    Album: DefaultAlbums,
    ApiCall: DefaultApiState
};