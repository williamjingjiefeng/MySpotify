import React from "react";
import { mount } from "enzyme";
import { singers, newSong, songs } from "../../../tools/mockMusics";
import { ManageSongPage } from "./ManageSongPage";

function render(args) {
  const defaultProps = {
    singers,
    songs,
    // Passed from React Router in real app, so just stubbing in for test.
    // Could also choose to use MemoryRouter as shown in Header.test.js,
    // or even wrap with React Router, depending on whether I
    // need to test React Router related behavior.
    history: {},
    saveSong: jest.fn(),
    loadSingers: jest.fn(),
    loadSongs: jest.fn(),
    song: newSong,
    match: {}
  };

  const props = { ...defaultProps, ...args };

  return mount(<ManageSongPage {...props} />);
}

it("sets error when attempting to save an empty title field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required.");
});
