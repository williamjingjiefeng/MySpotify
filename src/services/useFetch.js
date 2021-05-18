import { useEffect } from "react";

export default function useFetch(songs, singers, albums, actions, song, setSong) {
    useEffect(() => {
        if (songs.length === 0) {
            actions.loadSongs().catch((error) => {
                alert("Loading songs failed" + error);
            });
        } else {
            if (song && setSong) {
                setSong({ ...song });
            }
        }

        if (singers.length === 0) {
            actions.loadSingers().catch((error) => {
                alert("Loading singers failed" + error);
            });
        }

        if (albums.length === 0) {
            actions.loadAlbums().catch((error) => {
                alert("Loading albums failed" + error);
            });
        }
    }, [song]);
}

export function Fetch({ songs, singers, albums, actions, song, setSong, children }) {
    useFetch(songs, singers, albums, actions, song, setSong);
    return children();
}
