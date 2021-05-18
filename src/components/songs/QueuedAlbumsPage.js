
import React from "react";
import { useQueue } from "../../services/queueContext";

export default function QueuedAlbumsPage() {
    const { queue } = useQueue();

    return (
        <table id="queuedAlbumList" className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Signer</th>
                </tr>
            </thead>
            <tbody>
                {queue.map((q) => {
                    return (
                        <tr key={q.name}>
                            <td>{q.name}</td>
                            <td> {q.singerName}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}