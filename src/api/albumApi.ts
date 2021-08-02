import { handleResponse, handleError } from "./apiUtils";
import { IAlbum } from "../redux/dispatch/Album/Album";
const baseUrl = process.env.API_URL + "/albums/";

export function getAlbums(): Promise<IAlbum[]> {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}
