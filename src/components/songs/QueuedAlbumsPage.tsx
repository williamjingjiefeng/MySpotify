
import React from "react";
import { toast } from "react-toastify";
import { useQueue } from "../../services/queueContext";
import { IQueueItem } from "../../services/iQueueItem";
import "./QueuedAlbumsPage.scss";

export default function QueuedAlbumsPage() {
    const { queue, dispatch } = useQueue();

    async function handleRemove(e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, queueItem: IQueueItem) {
        e.preventDefault();
        toast.success("Album was removed from the queue.");
        try {
            await dispatch({ type: "remove", queueItem })
        } catch (error) {
            toast.error("Remove failed: " + error.message, { autoClose: false });
        }
    }

    return (
        <table id="queuedAlbumList" className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Signer</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {queue.map((q: IQueueItem) => {
                    return (
                        <tr key={q.name}>
                            <td>{q.name}</td>
                            <td> {q.singerName}</td>
                            <td><button className="btn btn-outline-danger remove" onClick={(e) => handleRemove(e, q)}>Remove</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}