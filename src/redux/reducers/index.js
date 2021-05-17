import { combineReducers } from "redux";
import songs from "./songReducer";
import singers from "./singerReducer";
import albums from "./albumReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  songs,
  singers,
  albums,
  apiCallsInProgress
});

export default rootReducer;
