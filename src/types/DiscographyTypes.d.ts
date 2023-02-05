type Release = {
    releaseName: string;
    releaseArtist: string;
    releaseDate: string;
    releaseType: string;
    coverUrl: string;
    tracks: Track[];
    links: ReleaseLinks;
}

type Track = {
    trackNumber: number;
    trackTitle: string;
    trackLength: number;
    videoLink?: string;
    redditLink?: string;
}

type ReleaseLinks = {
    bandcamp: string;
    spotify: string;
    amazonMusic: string;
    youtubeMusic: string;
    appleMusic: string;
    reddit: string;
}