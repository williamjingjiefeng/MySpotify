import { SongState } from "./dispatch/Song/SongState";
import { SingerState } from "./dispatch/Singer/SingerState";
import { AlbumState } from "./dispatch/Album/AlbumState";
import { ApiState } from "./dispatch/ApiCall/ApiState";

export interface IAppState {
	Song: SongState;
	Singer: SingerState;
	Album: AlbumState;
	ApiCall: ApiState;
};
