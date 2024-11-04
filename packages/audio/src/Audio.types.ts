export type SongsProps = {
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

export type ChangeEventPayload = {
  value: string;
};

export type AudioViewProps = {
  name: string;
};
