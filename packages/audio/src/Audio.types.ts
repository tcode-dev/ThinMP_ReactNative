export type SongsProps = {
  id: String;
  name: String;
  albumId: String;
  albumName: String;
  artistId: String;
  artistName: String;
  imageId: String;
  duration: number;
  trackNumber: number;
};

export type ChangeEventPayload = {
  value: string;
};

export type AudioViewProps = {
  name: string;
};
