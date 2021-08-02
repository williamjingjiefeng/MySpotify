import { handleResponse, handleError } from "./apiUtils";
import { ISinger } from "../redux/dispatch/Singer/Singer";
const baseUrl = process.env.API_URL + "/singers/";

export function getSingers():Promise<ISinger[]> {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
