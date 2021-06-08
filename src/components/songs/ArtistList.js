import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useQueue } from "../../services/queueContext";
import { toast } from "react-toastify";

export default function SingerList({ singers }) {
  const { queue, dispatch } = useQueue();

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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe
                </a>
              </td>
              <td>{singer.name}</td>
              <td>
                <table className="table table-striped table-sm">
                  <thead></thead>
                  <tbody>
                    {singer.albums.map((z) => {
                      return (
                        <tr key={z.name}>
                          <td>{z.name}</td>
                          <td style={{ textAlign: "right" }}>
                            <Link
                              className="btn"
                              onClick={() => {
                                if (queue.find((y) => y.name === z.name)) {
                                  toast.success(
                                    "Selected album already in the queue."
                                  );
                                } else {
                                  toast.success(
                                    "Selected album added to queue albums."
                                  );
                                  dispatch({
                                    type: "add",
                                    queueItem: {
                                      name: z.name,
                                      singerName: singer.name,
                                    },
                                  });
                                }
                              }}
                              to="/albums"
                            >
                              Queue
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

SingerList.propTypes = {
  singers: PropTypes.array.isRequired,
};
