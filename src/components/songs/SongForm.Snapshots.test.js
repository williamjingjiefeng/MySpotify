import React from "react";
import SongForm from "./SongForm";
import renderer from "react-test-renderer";
import { songs, singers, albums } from "../../../tools/mockMusics";

it("sets submit button label 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <SongForm
      song={songs[0]}
      singers={singers}
      albums={albums}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving
    />
  );

  expect(tree).toMatchSnapshot();
});

it("sets submit button label 'Save' when saving is false", () => {
  const tree = renderer.create(
    <SongForm
      song={songs[0]}
      singers={singers}
      albums={albums}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving={false}
    />
  );

  expect(tree).toMatchSnapshot();
});
