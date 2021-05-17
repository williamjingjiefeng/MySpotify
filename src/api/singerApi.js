import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/singers/";

export function getSingers() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
