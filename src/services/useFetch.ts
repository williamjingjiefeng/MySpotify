import { useEffect, useRef } from "react";
import * as songActions from "../redux/actions/songActions";
import * as singerActions from "../redux/actions/singerActions";
import * as albumActions from "../redux/actions/albumActions";
import { ISong, ISinger, IAlbum } from "../redux/dispatch/Music/PreferenceState";

export default function useFetch(songs: ISong[], singers: ISinger[], albums: IAlbum[], song: ISong | null, setSong: React.Dispatch<any> | null): void {
    const isLoadingSongs = useRef(false);
    const isLoadingSingers = useRef(false);
    const isLoadingAlbums = useRef(false);

    useEffect(() => {

        if (songs.length === 0 && isLoadingSongs.current === false) {
            isLoadingSongs.current = true;
            songActions.loadSongs()(null).catch((error) => {
                alert("Loading songs failed: " + error);
            }).finally(() => {
                isLoadingSongs.current = false;
            });
            isLoadingSongs.current = false;
        } else {
            if (song && setSong) {
                setSong({ ...song });
            }
        }

        if (singers.length === 0 && isLoadingSingers.current === false) {
            isLoadingSingers.current = true;
            singerActions.loadSingers()(null).catch((error) => {
                alert("Loading singers failed: " + error);
            }).finally(() => {
                isLoadingSingers.current = false;
            });
        }

        if (albums.length === 0 && isLoadingAlbums.current === false) {
            isLoadingAlbums.current = true;
            albumActions.loadAlbums()(null).catch((error) => {
                alert("Loading albums failed: " + error);
            }).finally(() => {
                isLoadingAlbums.current = false;
            });
        }

    }, [song]);
}

interface IMusicEffect {
    children: () => React.ReactElement | null;
    songs: ISong[];
    singers: ISinger[];
    albums: IAlbum[];
    song: ISong | null;
    actions: React.Dispatch<any> | null;
}

export function Fetch({ children, songs, singers, albums, actions, song }: IMusicEffect) {
    useFetch(songs, singers, albums, song, actions);

    return children();
}
