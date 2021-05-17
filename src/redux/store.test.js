import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as songActions from "./actions/songActions";

it("Should handle creating songs", function() {
  // arrange
  const store = createStore(rootReducer, initialState);
  const song = {
    title: "Clean Code"
  };

  // act
  const action = songActions.createSongSuccess(song);
  store.dispatch(action);

  // assert
  const createdSong = store.getState().songs[0];
  expect(createdSong).toEqual(song);
});
