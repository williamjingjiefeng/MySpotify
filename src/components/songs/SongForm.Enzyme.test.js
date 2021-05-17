import React from "react";
import SongForm from "./SongForm";
import { shallow } from "enzyme";

function renderSongForm(args) {
  const defaultProps = {
    singers: [],
    song: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return shallow(<SongForm {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderSongForm();
  // console.log(wrapper.debug());
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Song");
});

it('labels save buttons as "Save" when not saving', () => {
  const wrapper = renderSongForm();
  expect(wrapper.find("button").text()).toBe("Save");
});

it('labels save button as "Saving..." when saving', () => {
  const wrapper = renderSongForm({ saving: true });
  expect(wrapper.find("button").text()).toBe("Saving...");
});
