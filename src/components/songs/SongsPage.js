import React from "react";
import { connect } from "react-redux";
import * as songActions from "../../redux/actions/songActions";
import * as singerActions from "../../redux/actions/singerActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import SongList from "./SongList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class SongsPage extends React.Component {
  state = {
    redirectToAddSongPage: false
  };

  componentDidMount() {
    const { songs, singers, actions } = this.props;

    if (songs.length === 0) {
      actions.loadSongs().catch(error => {
        alert("Loading songs failed" + error);
      });
    }

    if (singers.length === 0) {
      actions.loadSingers().catch(error => {
        alert("Loading singers failed" + error);
      });
    }
  }

  handleDeleteSong = async song => {
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

            <SongList
              onDeleteClick={this.handleDeleteSong}
              songs={this.props.songs}
            />
          </>
        )}
      </>
    );
  }
}

SongsPage.propTypes = {
  singers: PropTypes.array.isRequired,
  songs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    songs:
      state.singers.length === 0
        ? []
        : state.songs.map(song => {
          return {
            ...song,
            singerName: state.singers.find(a => a.id === song.singerId).name
          };
        }),
    singers: state.singers,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadSongs: bindActionCreators(songActions.loadSongs, dispatch),
      loadSingers: bindActionCreators(singerActions.loadSingers, dispatch),
      deleteSong: bindActionCreators(songActions.deleteSong, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsPage);
