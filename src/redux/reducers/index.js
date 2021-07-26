import { combineReducers } from "redux";
import { SongReducer } from "../dispatch/Song/SongRedux";
import { SingerReducer } from "../dispatch/Singer/SingerRedux";
import { AlbumReducer } from "../dispatch/Album/AlbumRedux";
import { UIReducer } from "../dispatch/UI/UIRedux";

const rootReducer = combineReducers({
    Song: SongReducer,
    Singer: SingerReducer,
    Album: AlbumReducer,
    UI: UIReducer
});

export default rootReducer;
