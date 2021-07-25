import React, { useEffect } from "react";
import { IAppState } from "../../redux/AppState";
import { connect } from "react-redux";
import { loadSongs } from "../../redux/actions/songActions";
import { loadSingers } from "../../redux/actions/singerActions";
import { loadAlbums } from "../../redux/actions/albumActions";

const AboutPage = (props: MyPropsFromStore & MyPropsFromDispatch) => {

    useEffect(() => {
        props.LoadSongs();
        props.LoadSingers();
        props.LoadAlbums();
    }, []);

    return (
        <div>
            <h2>About</h2>
            <p>
                This application uses React, Redux, Redux thunk, React context provider for global data management,
                React Router, and many other helpful libraries. In addition, we are using ThemeProvider and styled components
                to build a theme of your choice and apply it to the rest of application on top of predefined sets of themes.<br /><br />

                Typescript is deployed to render all queued albums related pages, so coexistence of Babel and Typescript loaders
                is a feature of the entire application.<br /><br />

                We have loaded {props.NumberOfSongs} songs from {props.NumberOfSingers} singers, with {props.NumberOfAlbums} albums in total.
            </p>
        </div>
    );
};

interface MyPropsFromStore {
    NumberOfSongs: number;
    NumberOfSingers: number;
    NumberOfAlbums: number;
}

interface MyPropsFromDispatch {
    LoadSongs: () => (dispatch?: React.Dispatch<any> | undefined) => Promise<void>;
    LoadSingers: () => (dispatch?: React.Dispatch<any> | undefined) => Promise<void>;
    LoadAlbums: () => (dispatch?: React.Dispatch<any> | undefined) => Promise<void>;
}

function mapStateToProps(state: IAppState): MyPropsFromStore {
    return {
        NumberOfSongs: state.Song.Songs.length,
        NumberOfSingers: state.Singer.Singers.length,
        NumberOfAlbums: state.Album.Albums.length
    };
}

const mapDispatchToProps: MyPropsFromDispatch = {
    LoadSongs: loadSongs,
    LoadSingers: loadSingers,
    LoadAlbums: loadAlbums
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
