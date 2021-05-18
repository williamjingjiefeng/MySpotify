import React from "react";
import PropTypes from "prop-types";

const SingerList = ({ singers }) => (
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
                    return (<li key={z} className="list-group-item justify-content-between align-items-center">{z}</li>);
                  })}
              </ul>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

SingerList.propTypes = {
  singers: PropTypes.array.isRequired
};

export default SingerList;
