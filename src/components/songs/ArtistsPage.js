import React from "react";
import useFetchAll from "../../services/useFetchAll";
import Spinner from "../common/Spinner";
import SingerList from "./ArtistList";

export default function ArtistsPage({ ...props }) {
  const { data, error, loading } = useFetchAll(["/singers/", "/albums/"]);

  if (error) {
    throw error;
  }

  if (loading || data === null) {
    return <Spinner></Spinner>;
  }

  const singers = data[0].map((z) => {
    return { ...z, albums: data[1].filter((y) => y.singerId === z.id) };
  });

  return <SingerList singers={singers} history={props.history}></SingerList>;
}
