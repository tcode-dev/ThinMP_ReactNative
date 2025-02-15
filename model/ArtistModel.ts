import { ArtistDTO } from "audio";

export class ArtistModel {
  id: string;
  name: string;
  imageId?: string;

  constructor(
    id: string,
    name: string,
    imageId?: string,
  ) {
    this.id = id;
    this.name = name;
    this.imageId = imageId;
  }

  static fromDTO(artist: ArtistDTO): ArtistModel {
    return new ArtistModel(
      artist.id,
      artist.name,
      artist.imageId,
    );
  }
}
