
export interface PreferenceState {

    Songs: ISong[];

    Singers: ISinger[];

    Albums: IAlbum[];

    ApiCallsInProgress: number;
}

export interface ISong {
    id: number;
    title: string;
    youtubeId: string;
    singerId: number;
    albumId: number;
}

export interface ISinger {
    id: number;
    name: string;
    youtubeId: string;
}

export interface IAlbum {
    id: number;
    singerId: string;
    name: string;
}

/** Default value of the Preference slice. */
export const DefaultPreference: PreferenceState = {
    Songs: [],
    Singers: [],
    Albums: [],
    ApiCallsInProgress: 0
};