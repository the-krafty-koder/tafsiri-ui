export type Subtitle = {
    title: string;
    fileId?: number;
    language: string;
    release: string;
    fromTrusted: boolean;
    hd: boolean | null;
    imdbId: string | null;
    imgUrl: string | null;
}
