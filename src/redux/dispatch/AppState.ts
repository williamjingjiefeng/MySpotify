import { SongState } from "./Song/SongState";
import { SingerState } from "./Singer/SingerState";
import { AlbumState} from "./Album/AlbumState";

export interface IAppState {
    Song: SongState;
    Singer: SingerState;
    Album: AlbumState;
    ApiCallsInProgress: number;
};
