import React from "react";
import useFetchAll from "../../services/useFetchAll";
import Spinner from "../common/Spinner";
import SingerList from "./ArtistList";
import { ISinger } from "../../redux/dispatch/Singer/Singer";
import { ISong } from "../../redux/dispatch/Song/Song";
import { IHistory } from "../../redux/IHistory";

interface MyPropsFromJsx {
    history: IHistory;
}

interface IUseFetchAll {
    data: any;
    error: any;
    loading: boolean;
}

export default function ArtistsPage({ ...props }: MyPropsFromJsx) {
    const { data, error, loading }: IUseFetchAll = useFetchAll(["/singers/", "/albums/"]);

    if (error) {
        throw error;
    }

    if (loading || data === null) {
        return <Spinner></Spinner>;
    }

    const singers = data[0].map((z: ISinger) => {
        return { ...z, albums: data[1].filter((y: ISong) => y.singerId === z.id) };
    });

    return <SingerList singers={singers} history={props.history}></SingerList>;
}
