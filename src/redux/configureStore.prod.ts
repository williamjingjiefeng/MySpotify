import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { IAppState } from "./AppState";

export default function configureStore(initialState: IAppState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
