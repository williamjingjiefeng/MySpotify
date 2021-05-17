import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadSongs, saveSong } from "../../redux/actions/songActions";
import { loadSingers } from "../../redux/actions/singerActions";
import { loadAlbums } from "../../redux/actions/albumActions";
import PropTypes from "prop-types";
import SongForm from "./SongForm";
import { newSong } from "../../../tools/mockMusics";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export function ManageSongPage({
  songs,
  singers,
  albums,
  loadSingers,
  loadSongs,
  loadAlbums,
  saveSong,
  history,
  ...props
}) {
  const [song, setSong] = useState({ ...props.song });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (songs.length === 0) {
      loadSongs().catch((error) => {
        alert("Loading songs failed" + error);
      });
    } else {
      setSong({ ...props.song });
    }

    if (singers.length === 0) {
      loadSingers().catch((error) => {
        alert("Loading singers failed" + error);
      });
    }

    if (albums.length === 0) {
      loadAlbums().catch((error) => {
        alert("Loading albums failed" + error);
      });
    }
  }, [props.song]);

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
    saveSong(song)
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
  loadSongs: PropTypes.func.isRequired,
  loadSingers: PropTypes.func.isRequired,
  loadAlbums: PropTypes.func.isRequired,
  saveSong: PropTypes.func.isRequired,
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

const mapDispatchToProps = {
  loadSongs,
  loadSingers,
  loadAlbums,
  saveSong,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSongPage);
