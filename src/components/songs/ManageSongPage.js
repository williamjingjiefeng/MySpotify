import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SongForm from "./SongForm";
import { newSong } from "../../../tools/mockMusics";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import useFetch from "../../services/useFetch"
import * as songActions from "../../redux/actions/songActions";
import * as singerActions from "../../redux/actions/singerActions";
import * as albumActions from "../../redux/actions/albumActions"
import { bindActionCreators } from "redux";

export function ManageSongPage({
  songs,
  singers,
  albums,
  actions,
  history,
  ...props
}) {
  const [song, setSong] = useState({ ...props.song });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useFetch(songs, singers, albums, actions, props.song, setSong);

  function handleChange(event) {
    const { name, value } = event.target;
    setSong((prevSong) => ({
      ...prevSong,
      [name]:
        name === "singerId" || name === "albumId" ? parseInt(value, 10) : value,
    }));
  }

  function formIsValid() {
    const { title, singerId, albumId, youtubeId } = song;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!singerId) errors.singer = "Singer is required";
    if (!youtubeId) errors.youtubeId = "Youtube ID is required";
    if (!albumId) errors.album = "Album is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    actions.saveSong(song)
      .then(() => {
        toast.success("Song saved.");
        history.push("/songs");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return singers.length === 0 || songs.length === 0 ? (
    <Spinner />
  ) : (
    <SongForm
      song={song}
      errors={errors}
      singers={singers}
      albums={albums}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageSongPage.propTypes = {
  song: PropTypes.object.isRequired,
  singers: PropTypes.array.isRequired,
  songs: PropTypes.array.isRequired,
  albums: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export function getSongByYoutubeId(songs, youtubeId) {
  return songs.find((song) => song.youtubeId === youtubeId) || null;
}

function mapStateToProps(state, ownProps) {
  const youtubeId = ownProps.match.params.youtubeId;
  const song =
    youtubeId && state.songs.length > 0
      ? getSongByYoutubeId(state.songs, youtubeId)
      : newSong;
  return {
    song,
    songs: state.songs,
    singers: state.singers,
    albums: state.albums,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadSongs: bindActionCreators(songActions.loadSongs, dispatch),
      loadSingers: bindActionCreators(singerActions.loadSingers, dispatch),
      loadAlbums: bindActionCreators(albumActions.loadAlbums, dispatch),
      saveSong: bindActionCreators(songActions.saveSong, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageSongPage);
