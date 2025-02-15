import { SongPayload } from "audio";

export class SongModel {
  id: string;
  name: string;
  albumId: string;
  albumName: string;
  artistId: string;
  artistName: string;
  imageId: string;
  duration: number;
  trackNumber: number;

  constructor(
    id: string,
    name: string,
    albumId: string,
    albumName: string,
    artistId: string,
    artistName: string,
    imageId: string,
    duration: number,
    trackNumber: number
  ) {
    this.id = id;
    this.name = name;
    this.albumId = albumId;
    this.albumName = albumName;
    this.artistId = artistId;
    this.artistName = artistName;
    this.imageId = imageId;
    this.duration = duration;
    this.trackNumber = trackNumber;
  }

  static fromPayload(song: SongPayload): SongModel {
    return new SongModel(
      song.id,
      song.name,
      song.albumId,
      song.albumName,
      song.artistId,
      song.artistName,
      song.imageId,
      song.duration,
      song.trackNumber
    );
  }
}
