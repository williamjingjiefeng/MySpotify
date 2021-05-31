import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SongList = ({ songs, onDeleteClick }) => (
  <table id="songList" className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Singer</th>
        <th>Album</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {songs.map((song) => {
        return (
          <tr key={song.id}>
            <td>
              <a
                className="btn btn-light"
                href={"https://www.youtube.com/watch?v=" + song.youtubeId}
                target="_blank" rel="noopener noreferrer"
              >
                Listen
              </a>
            </td>
            <td>
              <Link to={"/song/" + song.youtubeId}>{song.title}</Link>
            </td>
            <td>{song.singerName}</td>
            <td>{song.albumName}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(song)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

SongList.propTypes = {
  songs: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default SongList;
