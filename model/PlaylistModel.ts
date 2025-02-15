import { PlaylistDTO } from "@/repository/PlaylistRepository";

export class PlaylistModel {
  id: number;
  name: string;
  order: number;

  constructor(id: number, name: string, order: number) {
    this.id = id;
    this.name = name;
    this.order = order;
  }

  static fromDTO(artist: PlaylistDTO): PlaylistModel {
    return new PlaylistModel(
      artist.id,
      artist.name,
      artist.sort_order,
    );
  }
}
