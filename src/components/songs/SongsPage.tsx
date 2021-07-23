import React from "react";
import { connect } from "react-redux";
import SongList from "./SongList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { Fetch } from "../../services/useFetch"
import * as actions from "../../redux/actions/songActions";
import { ISong, IAlbum, IRootState, ISinger } from "../../redux/dispatch/Music/PreferenceState";

interface IState {
    redirectToAddSongPage: boolean
}

interface MyPropsFromStore {
    songs: ISong[];
    singers: ISinger[];
    albums: IAlbum[];
    loading: boolean;
}

function mapStateToProps(state: IRootState): MyPropsFromStore {
    const { Singers, Albums, ApiCallsInProgress } = state.Preference;
    return {
        songs:
            Singers.length === 0 || Albums.length === 0
                ? []
                : state.Preference.Songs.map((song: ISong) => {
                    return {
                        ...song,
                        singerName: Singers.find((a) => a.id === song.singerId)?.name,
                        albumName: Albums.find((z: IAlbum) => z.id === song.albumId)?.name
                    };
                }),
        singers: Singers,
        albums: Albums,
        loading: ApiCallsInProgress > 0
    };
}

class SongsPage extends React.Component<MyPropsFromStore, IState> {
    state = {
        redirectToAddSongPage: false
    };

    handleDeleteSong = async (song: ISong) => {
        toast.success("Song deleted");
        try {
            await actions.deleteSong(song)();
        } catch (error) {
            toast.error("Delete failed. " + error.message, { autoClose: false });
        }
    };

    render() {
        return (
            <>
                {this.state.redirectToAddSongPage && <Redirect to="/song" />}
                <h2>My Playlist</h2>
                {this.props.loading ? (
                    <Spinner />
                ) : (
                    <>
                        <button
                            className="btn btn-primary add-song"
                            onClick={() => this.setState({ redirectToAddSongPage: true })}
                        >
                            Add Song
                            </button>

                        <Fetch songs={this.props.songs} singers={this.props.singers} albums={this.props.albums} actions={null} song={null}>
                            {() => {
                                return <SongList
                                    onDeleteClick={this.handleDeleteSong}
                                    songs={this.props.songs}
                                />
                            }}
                        </Fetch>
                    </>
                )
                }
            </>
        );
    }
}

export default connect(mapStateToProps)(SongsPage);
