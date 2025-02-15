export type AudioModuleEvents = {
  onPlaybackSongChange: (params: SongPayload) => void;
  onIsPlayingChange: (params: IsPlayingPayload) => void;
};

export type SongPayload = {
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

export type AlbumPayload = {
  id: string;
  name: string;
  artistId: string;
  artistName: string;
  imageId: string;
};

export type ArtistPayload = {
  id: string;
  name: string;
  imageId?: string;
};

export type IsPlayingPayload = {
  isPlaying: boolean;
};

export type CurrentTimePayload = {
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
