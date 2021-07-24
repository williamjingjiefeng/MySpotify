import { ISinger } from "./Singer";

export interface SingerState {
    Singers: ISinger[]
}

export const DefaultSingers: SingerState =
{
    Singers: []
}