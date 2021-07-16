import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SongList from "./SongList";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { Fetch } from "../../services/useFetch"
import * as actions from "../../redux/actions/songActions";

class SongsPage extends React.Component {
    state = {
        redirectToAddSongPage: false
    };

    handleDeleteSong = async (song) => {
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

                            <Fetch songs={this.props.songs} singers={this.props.singers} albums={this.props.albums}>
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

SongsPage.propTypes = {
    singers: PropTypes.array.isRequired,
    songs: PropTypes.array.isRequired,
    albums: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
    return {
        songs:
            state.Preference.Singers.length === 0 || state.Preference.Albums.length === 0
                ? []
                : state.Preference.Songs.map((song) => {
                    return {
                        ...song,
                        singerName: state.Preference.Singers.find((a) => a.id === song.singerId).name,
                        albumName: state.Preference.Albums.find((z) => z.id === song.albumId).name,
                    };
                }),
        singers: state.Preference.Singers,
        albums: state.Preference.Albums,
        loading: state.Preference.apiCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(SongsPage);
