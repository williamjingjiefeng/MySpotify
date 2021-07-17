export interface IRootState {
    Preference: PreferenceState
}

export interface IErrors {
    title?: string;
    singer?: string;
    youtubeId?: string;
    album?: string;
    onSave?: string;
}

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
    singerName: string | undefined;
    albumName: string | undefined;
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