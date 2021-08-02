import { combineReducers } from "redux";
import { SongReducer } from "../dispatch/Song/SongRedux";
import { SingerReducer } from "../dispatch/Singer/SingerRedux";
import { AlbumReducer } from "../dispatch/Album/AlbumRedux";
import { UIReducer } from "../dispatch/UI/UIRedux";
import apiCallStatusReducer from "./apiStatusReducer";

const rootReducer = combineReducers({
    Song: SongReducer,
    Singer: SingerReducer,
    Album: AlbumReducer,
    UI: UIReducer,
    apiCallStatus: apiCallStatusReducer
});

export default rootReducer;
