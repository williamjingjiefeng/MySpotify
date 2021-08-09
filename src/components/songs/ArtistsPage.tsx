import React from "react";
import useFetchAll from "../../services/useFetchAll";
import Spinner from "../common/Spinner";
import SingerList from "./ArtistList";
import { ISinger } from "../../redux/dispatch/Singer/Singer";
import { IHistory } from "../../redux/IHistory";
import { IAlbum } from "../../redux/dispatch/Album/Album";

interface MyPropsFromJsx {
    history: IHistory;
}

type fetchType = [ISinger[], IAlbum[]];

const defaultFetchType: fetchType = [[], []];

interface IUseFetchAll {
    data: fetchType | undefined;
    error: any;
    loading: boolean;
}

export default function ArtistsPage({ ...props }: MyPropsFromJsx) {
    const { data, error, loading }: IUseFetchAll = useFetchAll<fetchType>(["/singers/", "/albums/"], defaultFetchType);

    if (error) {
        throw error;
    }

    if (loading || data === null) {
        return <Spinner></Spinner>;
    }

    const singers = data[0].map((z: ISinger) => {
        return { ...z, albums: data[1].filter((y: IAlbum) => y.singerId === z.id) };
    });

    return <SingerList singers={singers} history={props.history}></SingerList>;
}
