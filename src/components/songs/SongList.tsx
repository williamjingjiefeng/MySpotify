import React from "react";
import { Link } from "react-router-dom";
import { ISong } from "../../redux/dispatch/Music/PreferenceState";

interface ISongList {
    songs: ISong[];
    onDeleteClick: (song: ISong) => void;
}

const SongList = ({ songs, onDeleteClick }: ISongList) => (
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
            {songs.map((song: ISong) => {
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
                                onClick={() => onDeleteClick(song)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
);

export default SongList;
