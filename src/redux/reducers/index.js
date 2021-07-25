import { combineReducers } from "redux";
import { SongReducer } from "../dispatch/Song/SongRedux";
import { SingerReducer } from "../dispatch/Singer/SingerRedux";
import { AlbumReducer } from "../dispatch/Album/AlbumRedux";
import { ApiCallReducer } from "../dispatch/ApiCall/ApiCallRedux";

const rootReducer = combineReducers({
    Song: SongReducer,
    Singer: SingerReducer,
    Album: AlbumReducer,
    ApiCall: ApiCallReducer
});

export default rootReducer;
