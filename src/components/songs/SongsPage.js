import React from "react";
import { connect } from "react-redux";
import * as songActions from "../../redux/actions/songActions";
import * as singerActions from "../../redux/actions/singerActions";
import * as albumActions from "../../redux/actions/albumActions"
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import SongList from "./SongList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { Fetch } from "../../services/useFetch"

class SongsPage extends React.Component {
  state = {
    redirectToAddSongPage: false,
  };

  handleDeleteSong = async (song) => {
    toast.success("Song deleted");
    try {
      await this.props.actions.deleteSong(song);
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

            <Fetch songs={this.props.songs} singers={this.props.singers} albums={this.props.albums} actions={this.props.actions}>
              {() => {
                return <SongList
                  onDeleteClick={this.handleDeleteSong}
                  songs={this.props.songs}
                />
              }
              }
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
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    songs:
      state.singers.length === 0 || state.albums.length === 0
        ? []
        : state.songs.map((song) => {
          return {
            ...song,
            singerName: state.singers.find((a) => a.id === song.singerId)
              .name,
            albumName: state.albums.find((z) => z.id === song.albumId).name,
          };
        }),
    singers: state.singers,
    albums: state.albums,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadSongs: bindActionCreators(songActions.loadSongs, dispatch),
      loadSingers: bindActionCreators(singerActions.loadSingers, dispatch),
      loadAlbums: bindActionCreators(albumActions.loadAlbums, dispatch),
      deleteSong: bindActionCreators(songActions.deleteSong, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SongsPage);
