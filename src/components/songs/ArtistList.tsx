import React from "react";
import { useQueue } from "../../services/queueContext";
import { toast } from "react-toastify";
import { ISinger } from "../../redux/dispatch/Singer/Singer";
import { IHistory } from "../../redux/IHistory";

interface IMyProps {
    singers: ISinger[];
    history: IHistory;
}

export default function SingerList({ singers, history }: IMyProps) {
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
                                                        <button
                                                            className="btn"
                                                            disabled={queue.filter((y) => y.name === z.name).length !== 0}
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

                                                                history.push("/albums");
                                                            }}
                                                        >
                                                            Queue
                                                        </button>
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