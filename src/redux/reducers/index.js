import { combineReducers } from "redux";
import songs from "./songReducer";
import singers from "./singerReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  songs,
  singers,
  apiCallsInProgress
});

export default rootReducer;
