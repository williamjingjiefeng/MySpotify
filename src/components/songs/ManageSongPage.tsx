import React, { useState } from "react";
import { connect } from "react-redux";
import SongForm from "./SongForm";
import { newSong } from "../../../tools/mockMusics";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import useFetch from "../../services/useFetch";
import * as actions from "../../redux/actions/songActions";
import { IErrors } from "../../redux/dispatch/ErrorState";
import { ISong } from "../../redux/dispatch/Song/Song";
import { RouteComponentProps } from 'react-router-dom';
import { ISinger } from "../../redux/dispatch/Singer/Singer";
import { IAlbum } from "../../redux/dispatch/Album/Album";
import { IAppState } from "../../redux/dispatch/AppState";

interface IHistory {
    push: (route: string) => {}
}

interface MyPropsFromStore {
    songs: ISong[];
    song: ISong;
    singers: ISinger[];
    albums: IAlbum[];
}

interface MyPropsFromJsx {
    history: IHistory;
}

type AllMyProps = MyPropsFromStore & MyPropsFromJsx;

export const ManageSongPage = (props: AllMyProps) => {
    const [song, setSong] = useState({ ...props.song });
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);

    const { songs, singers, albums, history } = props;

    useFetch(songs, singers, albums, props.song, setSong);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSong((prevSong) => ({
            ...prevSong,
            [name]:
                name === "singerId" || name === "albumId" ? parseInt(value, 10) : value,
        }));
    }

    const formIsValid = () => {
        const { title, singerId, albumId, youtubeId } = song;
        const errors: IErrors = {};

        if (!title) errors.title = "Title is required.";
        if (!singerId) errors.singer = "Singer is required";
        if (!youtubeId) errors.youtubeId = "Youtube ID is required";
        if (!albumId) errors.album = "Album is required";

        setErrors(errors);
        // Form is valid if the errors object still has no properties
        return Object.keys(errors).length === 0;
    }

    const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formIsValid()) {
            return;
        }

        setSaving(true);
        actions.saveSong(song)()
            .then(() => {
                toast.success("Song saved.");
                history.push("/songs");
            })
            .catch((error) => {
                setSaving(false);
                setErrors({ onSave: error.message });
            });
    };

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

export function getSongByYoutubeId(songs: ISong[], youtubeId: string) {
    return songs.find((song: ISong) => song.youtubeId === youtubeId) || null;
}

interface OwnProps extends RouteComponentProps<any> {
}

function mapStateToProps(state: IAppState, ownProps: OwnProps): MyPropsFromStore {
    const youtubeId = ownProps.match.params.youtubeId;
    const song =
        youtubeId && state.Song.Songs.length > 0
            ? getSongByYoutubeId(state.Song.Songs, youtubeId) ?? newSong
            : newSong;
    return {
        song,
        songs: state.Song.Songs,
        singers: state.Singer.Singers,
        albums: state.Album.Albums
    };
}

export default connect(mapStateToProps)(ManageSongPage);
