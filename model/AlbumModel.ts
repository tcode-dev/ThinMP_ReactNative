import { AlbumDTO } from "audio";

export class AlbumModel {
  id: string;
  name: string;
  artistId: string;
  artistName: string;
  imageId: string;

  constructor(
    id: string,
    name: string,
    artistId: string,
    artistName: string,
    imageId: string,
  ) {
    this.id = id;
    this.name = name;
    this.artistId = artistId;
    this.artistName = artistName;
    this.imageId = imageId;
  }

  static fromDTO(album: AlbumDTO): AlbumModel {
    return new AlbumModel(
      album.id,
      album.name,
      album.artistId,
      album.artistName,
      album.imageId,
    );
  }
}
