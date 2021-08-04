import { IAlbum } from "../Album/Album";

export interface ISinger {
    id: number;
    name: string;
    youtubeId: string;
    albums: IAlbum[];
};