import { combineReducers } from "redux";
import songs from "./songReducer";
import singers from "./singerReducer";
import albums from "./albumReducer";
import apiCallsInProgress from "./apiStatusReducer";
import { PreferenceReducer } from "../dispatch/Songs/PreferenceRedux";

const rootReducer = combineReducers({
  songs,
  singers,
  albums,
  apiCallsInProgress,
  Preference: PreferenceReducer
});

export default rootReducer;
