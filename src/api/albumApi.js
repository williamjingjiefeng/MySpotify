import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/albums/";

export function getAlbums() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
