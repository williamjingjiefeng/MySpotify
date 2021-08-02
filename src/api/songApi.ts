import { handleResponse, handleError } from "./apiUtils";
import { ISong } from "../redux/dispatch/Song/Song";
const baseUrl = process.env.API_URL + "/songs/";

export function getSongs(): Promise<ISong[]> {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}

export function saveSong(song: ISong): Promise<ISong> {
    return fetch(baseUrl + (song.id || ""), {
        method: song.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json" },
        body: JSON.stringify(song)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function deleteSong(songId: number) {
    return fetch(baseUrl + songId, { method: "DELETE" })
        .then(handleResponse)
        .catch(handleError);
}
