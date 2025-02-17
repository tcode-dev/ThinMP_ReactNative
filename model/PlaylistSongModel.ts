import { PlaylistSongEntity } from '@/type/Entity';

export class PlaylistSongModel {
  playlistId: number;
  songId: string;
  order: number;

  constructor(playlistId: number, songId: string, order: number) {
    this.playlistId = playlistId;
    this.songId = songId;
    this.order = order;
  }

  static fromEntity(playlist: PlaylistSongEntity): PlaylistSongModel {
    return new PlaylistSongModel(playlist.playlist_id, playlist.song_id, playlist.sort_order);
  }
}
