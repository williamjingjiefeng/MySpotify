import * as songActions from "./songActions";
import * as types from "./actionTypes";
import { songs } from "../../../tools/mockMusics";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Songs Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_SONGS_SUCCESS when loading songs", () => {
      fetchMock.mock("*", {
        body: songs,
        headers: { "content-type": "application/json" }
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_SONGS_SUCCESS, songs: songs }
      ];

      const store = mockStore({ songs: [] });
      return store.dispatch(songActions.loadSongs()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("createSongSuccess", () => {
  it("should create a CREATE_SONG_SUCCESS action", () => {
    //arrange
    const song = songs[0];
    const expectedAction = {
      type: types.CREATE_SONG_SUCCESS,
      song
    };

    //act
    const action = songActions.createSongSuccess(song);

    //assert
    expect(action).toEqual(expectedAction);
  });
});
