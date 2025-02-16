import { PlaylistEntity } from "@/repository/PlaylistRepository";

export class PlaylistModel {
  id: number;
  name: string;
  order: number;

  constructor(id: number, name: string, order: number) {
    this.id = id;
    this.name = name;
    this.order = order;
  }

  static fromDTO(playlist: PlaylistEntity): PlaylistModel {
    return new PlaylistModel(
      playlist.id,
      playlist.name,
      playlist.sort_order,
    );
  }
}
