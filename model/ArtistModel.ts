import { ArtistPayload } from "audio";

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

  static fromPayload(artist: ArtistPayload): ArtistModel {
    return new ArtistModel(
      artist.id,
      artist.name,
      artist.imageId,
    );
  }
}
