import { useEffect, useRef } from "react";

export default function useFetch(songs, singers, albums, actions, song, setSong) {
    const isLoadingSongs = useRef(false);
    const isLoadingSingers = useRef(false);
    const isLoadingAlbums = useRef(false);

    useEffect(() => {

        if (songs.length === 0 && isLoadingSongs.current === false) {
            isLoadingSongs.current = true;
            actions.loadSongs().catch((error) => {
                alert.log("Loading songs failed: " + error);
            }).finally(() => {
                isLoadingSongs.current = false;
            });
        } else {
            if (song && setSong) {
                setSong({ ...song });
            }
        }

        if (singers.length === 0 && isLoadingSingers.current === false) {
            isLoadingSingers.current = true;
            actions.loadSingers().catch((error) => {
                alert.log("Loading singers failed: " + error);
            }).finally(() => {
                isLoadingSingers.current = false;
            });
        }

        if (albums.length === 0 && isLoadingAlbums.current === false) {
            isLoadingAlbums.current = true;
            actions.loadAlbums().catch((error) => {
                alert.log("Loading albums failed: " + error);
            }).finally(() => {
                isLoadingAlbums.current = false;
            });
        }

    }, [song]);
}

export function Fetch({ songs, singers, albums, actions, song, setSong, children }) {
    useFetch(songs, singers, albums, actions, song, setSong);
    return children();
}
