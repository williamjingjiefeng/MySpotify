import React from "react";
import useFatchAll from "../../services/useFatchAll";
import Spinner from "../common/Spinner";
import SingerList from "./ArtistList";

export default function ArtistsPage() {
    const { data, error, loading } = useFatchAll(["/singers/", "/albums/"]);

    if (error) {
        throw error;
    }

    if (loading) {
        return <Spinner></Spinner>;
    }

    const singers = data[0].map(z => {
        //return { ...z, albums: data[1].reduce((a, o) => (o.singerId === z.id && a.push({ name: o.name, singerName: z.name }), a), []) };
        return { ...z, albums: data[1].filter(y => y.singerId === z.id) };
    });

    return (<SingerList singers={singers}></SingerList>);
}