import { Dispatch } from "../StaticDispatch";
import { Colours } from "./PreferenceState";

export function PreferenceDemo() {

    // example: dispatch an action from anywhere!
    Dispatch.Preference.AddMusicGenre("Jazz");

    Dispatch.Preference.FavouriteColour(Colours.Blue);
    Dispatch.Preference.FavouriteNumber(100);
}