import { getDatabase } from '@/database/database';

export type PlaylistDTO = { id: number; name: string; sort_order: number };
export type PlaylistSongDTO = { playlist_id: number; song_id: string; sort_order: number };

export class PlaylistRepository {
  private db = getDatabase();

  existsPlaylist(id: PlaylistDTO['id']): boolean {
    return this.db.getFirstSync<PlaylistDTO>('SELECT * FROM playlists WHERE id = ?;', id) !== null;
  }

  findPlaylists(): PlaylistDTO[] {
    return this.db.getAllSync<PlaylistDTO>('SELECT * FROM playlists ORDER BY sort_order DESC');
  }

  findPlaylist(id: PlaylistDTO['id']): PlaylistDTO | null {
    return this.db.getFirstSync<PlaylistDTO>('SELECT * FROM playlists WHERE id = ? ORDER BY sort_order ASC;', id);
  }

  findPlaylistSongs(id: PlaylistDTO['id']): PlaylistSongDTO[] {
    return this.db.getAllSync<PlaylistSongDTO>('SELECT * FROM playlist_songs WHERE playlist_id = ?;', id);
  }

  findPlaylistSong(id: PlaylistDTO['id']): PlaylistSongDTO | null {
    return this.db.getFirstSync<PlaylistSongDTO>('SELECT * FROM playlist_songs WHERE playlist_id = ? ORDER BY sort_order ASC;', id);
  }

  createPlaylist(name: PlaylistDTO['name'], songId: PlaylistSongDTO['song_id']) {
    this.db.runSync(
      `
    INSERT INTO playlists (name, sort_order)
    VALUES (?, COALESCE((SELECT MAX(sort_order) FROM playlists), 0) + 1);
  `,
      name,
    );

    const result = this.db.getFirstSync<{ id: number }>('SELECT last_insert_rowid() as id;');

    if (result === null) {
      return;
    }

    this.addPlaylistSong(result.id, songId);
  }

  addPlaylistSong(playlistId: PlaylistSongDTO['playlist_id'], songId: PlaylistSongDTO['song_id']) {
    this.db.runSync(
      `
    INSERT INTO playlist_songs (playlist_id, song_id, sort_order)
    VALUES (?, ?, COALESCE((SELECT MAX(sort_order) FROM playlist_songs WHERE playlist_id = ?), 0) + 1);
  `,
      playlistId,
      songId,
      playlistId,
    );
  }
}