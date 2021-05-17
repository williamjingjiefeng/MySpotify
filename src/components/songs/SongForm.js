import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const SongForm = ({
  song,
  singers,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{song.id ? "Edit" : "Add"} Song</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={song.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="singerId"
        label="Singer"
        value={song.singerId || ""}
        defaultOption="Select Singer"
        options={singers.map(singer => ({
          value: singer.id,
          text: singer.name
        }))}
        onChange={onChange}
        error={errors.singer}
      />

      <TextInput
        name="youtubeId"
        label="Youtube ID"
        value={song.youtubeId}
        onChange={onChange}
        error={errors.youtubeId}
      />

      <TextInput
        name="album"
        label="Album"
        value={song.album}
        onChange={onChange}
        error={errors.album}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

SongForm.propTypes = {
  singers: PropTypes.array.isRequired,
  song: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default SongForm;
