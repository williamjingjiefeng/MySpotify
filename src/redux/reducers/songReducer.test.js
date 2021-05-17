import songReducer from "./songReducer";
import * as actions from "../actions/songActions";

it("should add song when passed CREATE_SONG_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      title: "A"
    },
    {
      title: "B"
    }
  ];

  const newSong = {
    title: "C"
  };

  const action = actions.createSongSuccess(newSong);

  // act
  const newState = songReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("B");
  expect(newState[2].title).toEqual("C");
});

it("should update song when passed UPDATE_SONG_SUCCESS", () => {
  // arrange
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" }
  ];

  const song = { id: 2, title: "New Title" };
  const action = actions.updateSongSuccess(song);

  // act
  const newState = songReducer(initialState, action);
  const updatedSong = newState.find(a => a.id == song.id);
  const untouchedSong = newState.find(a => a.id == 1);

  // assert
  expect(updatedSong.title).toEqual("New Title");
  expect(untouchedSong.title).toEqual("A");
  expect(newState.length).toEqual(3);
});
