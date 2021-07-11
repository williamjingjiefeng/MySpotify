
/** 
 * The user's preferences such as favourite colour.
 * Redux state for the "Preference" slice.
 */
export interface PreferenceState {

    /** The user's favourite colour, possibly null if one doesn't exist */
    FavouriteColour: Colours | null;

    /** Favourite number. Everyone has one! */
    FavouriteNumber: number;

    /** Music genres enjoyed by the user */
    MusicGenres: string[];
}

export enum Colours {
    Red,
    Blue,
    Green,
}

/** Default value of the Preference slice. */
export const DefaultPreference: PreferenceState = {
    FavouriteColour: null,
    FavouriteNumber: 42,
    MusicGenres: [],
};