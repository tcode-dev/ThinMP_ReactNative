import type { StyleProp, ViewStyle } from 'react-native';

export type OnLoadEventPayload = {
  url: string;
};

export type AudioModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
  onPlaybackSongChange: (params: SongProps) => void;
  onIsPlayingChange: (params: IsPlayingProps) => void;
};

export type ChangeEventPayload = {
  value: string;
};

export type AudioViewProps = {
  url: string;
  onLoad: (event: { nativeEvent: OnLoadEventPayload }) => void;
  style?: StyleProp<ViewStyle>;
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
