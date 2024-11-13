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

export type ChangeEventPayload = {
  value: string;
};

export type AudioViewProps = {
  name: string;
};
