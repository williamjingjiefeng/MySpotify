import React from "react";
import PropTypes from "prop-types";
import { Link} from "react-router-dom";
import { useQueue } from "../../services/queueContext";

export default function SingerList({ singers }) {
  const { dispatch } = useQueue();
  
  return (
    <table id="singerList" className="table">
      <thead>
        <tr>
          <th />
          <th>Name</th>
          <th>Albums</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {singers.map((singer) => {
          return (
            <tr key={singer.youtubeId}>
              <td>
                <a
                  className="btn btn-light"
                  href={"https://www.youtube.com/channel/" + singer.youtubeId}
                >
                  Subscribe
              </a>
              </td>
              <td>{singer.name}</td>
              <td>
                <ul className="list-group">
                  {
                    singer.albums.map(z => {
                      return (
                        <li key={z.name} className="list-group-item justify-content-between align-items-center">
                          <Link onClick={() => {
                            dispatch({ type: "add", name: z.name, singerName: singer.name });
                          }} to="/albums">{z.name}</Link>
                        </li>);
                    })}
                </ul>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

SingerList.propTypes = {
  singers: PropTypes.array.isRequired
};