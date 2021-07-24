import { combineReducers } from "redux";
import apiCallStatusReducer from "./apiStatusReducer";
import { SongReducer } from "../dispatch/Song/SongRedux";
import { SingerReducer } from "../dispatch/Singer/SingerRedux";
import { AlbumReducer } from "../dispatch/Album/AlbumRedux";

const rootReducer = combineReducers({
    Song: SongReducer,
    Singer: SingerReducer,
    Album: AlbumReducer,
    ApiCallsInProgress: apiCallStatusReducer
});

export default rootReducer;
