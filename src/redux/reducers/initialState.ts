import { DefaultSongs } from "../dispatch/Song/SongState";
import { DefaultSingers } from "../dispatch/Singer/SingerState";
import { DefaultAlbums } from "../dispatch/Album/AlbumState";
import { IAppState } from "../dispatch/AppState";

export const InitAppState: IAppState = {
    Song: DefaultSongs,
    Singer: DefaultSingers,
    Album: DefaultAlbums,
    ApiCallsInProgress: 0
};