import React from "react";
import { cleanup, render } from "react-testing-library";
import SongForm from "./SongForm";

afterEach(cleanup);

function renderSongForm(args) {
  let defaultProps = {
    singers: [],
    song: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<SongForm {...props} />);
}

it("should render Add Song header", () => {
  const { getByText } = renderSongForm();
  getByText("Add Song");
});

it('should label save button as "Save" when not saving', () => {
  const { getByText } = renderSongForm();
  getByText("Save");
});

it('should label save button as "Saving..." when saving', () => {
  const { getByText } = renderSongForm({ saving: true });
  getByText("Saving...");
});
