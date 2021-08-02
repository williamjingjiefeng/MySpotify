import * as albumApi from "../../api/albumApi";
import { Dispatch } from "../dispatch/StaticDispatch";
import { DefaultUIState } from "../dispatch/UI/UIState";
import { beginApiCall, endApiCall } from "./apiStatusActions";

export function loadAlbums() {
    return function (dispatch?: React.Dispatch<any>) {
        if (dispatch) {
            dispatch(beginApiCall());
        } else {
            Dispatch.UI.BeginApiCall(DefaultUIState);
        }
        return albumApi
            .getAlbums()
            .then(albums => {
                Dispatch.Album.LoadAlbums(albums);
            })
            .catch(error => {
                throw error;
            })
            .finally(() => {
                if (dispatch) {
                    dispatch(endApiCall());
                } else {
                    Dispatch.UI.EndApiCall(DefaultUIState);
                }
            });
    };
}
