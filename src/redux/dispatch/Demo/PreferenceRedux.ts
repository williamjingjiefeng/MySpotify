import { Colours, DefaultPreference, PreferenceState } from "./PreferenceState";
import { DispatchBuilder } from "../DispatchBuilder";

/** defines the actions and reducers for the Preference store slice */
const builder = new DispatchBuilder<PreferenceState>("Preference", DefaultPreference);

/** An object which dispatches all the preference actions */
export const PreferenceDispatcher = {

    /** Set the user's favourite colour. */
    FavouriteColour: builder.AddAction("Favourite Colour", FavouriteColour),

    /** Set the user's favourite colour. */
    FavouriteNumber: builder.AddAction("Favourite Number", FavouriteNumber),

    /** Add a new preferred music genre. */
    AddMusicGenre: builder.AddAction("Add Music Genre", AddMusicGenre),

    /** Remove the specified genre from the user's list. */
    RemoveMusicGenre: builder.AddAction("Remove Music Genre", RemoveMusicGenre),
};

/** The reducer for the Preference state slice  */
export const PreferenceReducer = builder.MakeReducer();

/** Set the user's favourite colour. */
function FavouriteColour(state: PreferenceState, colour: Colours): PreferenceState {
    return {
        ...state,
        FavouriteColour: colour,
    };
}

/** Set the user's favourite colour. */
function FavouriteNumber(state: PreferenceState, number: number): PreferenceState {
    return {
        ...state,
        FavouriteNumber: number,
    };
}

/** Add a new preferred music genre. */
function AddMusicGenre(state: PreferenceState, genre: string): PreferenceState {

    // already exists
    if (state.MusicGenres.some(i => i == genre)) return state;

    // new
    return {
        ...state,
        MusicGenres: [...state.MusicGenres, genre],
    };
}

/** Remove the specified genre from the user's list. */
function RemoveMusicGenre(state: PreferenceState, genre: string): PreferenceState {

    const newGenres = state.MusicGenres.filter(i => i != genre);

    return {
        ...state,
        MusicGenres: newGenres,
    };
}