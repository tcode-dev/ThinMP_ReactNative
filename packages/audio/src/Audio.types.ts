export type AudioModuleEvents = {
  onPlaybackSongChange: (params: SongDTO) => void;
  onIsPlayingChange: (params: IsPlayingDTO) => void;
};

export type SongDTO = {
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

export type AlbumDTO = {
  id: string;
  name: string;
  artistId: string;
  artistName: string;
  imageId: string;
};

export type ArtistDTO = {
  id: string;
  name: string;
  imageId?: string;
};

export type CurrentTimeDTO = {
  currentTime: number;
};

export type IsPlayingDTO = {
  isPlaying: boolean;
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
