export type AudioModuleEvents = {
  onPlaybackSongChange: (params: SongProps) => void;
  onIsPlayingChange: (params: IsPlayingProps) => void;
};

export type SongProps = {
  id: string;
  name: string;
  albumId: string;
  albumName: string;
  artistId: string;
  artistName: string;
  imageId: string;
  duration: number;
  trackNumber: number;
};

export type AlbumProps = {
  id: string;
  name: string;
  artistId: string;
  artistName: string;
  imageId: string;
};

export type ArtistProps = {
  id: string;
  name: string;
};

export type ArtistDetailProps = {
  id: string;
  name: string;
  imageId: string;
};

export type IsPlayingProps = {
  isPlaying: boolean;
};

export type CurrentTimeProps = {
  currentTime: number;
};

export enum RepeatMode {
  Off = 0,
  One = 1,
  All = 2,
}

export enum ShuffleMode {
  Off = 0,
  On = 1,
}
