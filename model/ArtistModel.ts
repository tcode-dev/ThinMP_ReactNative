import { ArtistPayload } from "audio";

export class ArtistModel {
  id: string;
  name: string;

  constructor(
    id: string,
    name: string,
  ) {
    this.id = id;
    this.name = name;
  }

  static fromPayload(artist: ArtistPayload): ArtistModel {
    return new ArtistModel(
      artist.id,
      artist.name,
    );
  }
}
