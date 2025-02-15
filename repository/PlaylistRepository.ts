import { getDatabase } from '@/database/database';

export type Playlist = { id: number; name: string; sort_order: number };
export type PlaylistSong = { playlist_id: number; song_id: string; sort_order: number };

export class PlaylistRepository {
  private db = getDatabase();

  existsPlaylist(id: Playlist['id']): boolean {
    return this.db.getFirstSync<Playlist>('SELECT * FROM playlists WHERE id = ?;', id) !== null;
  }

  findPlaylists(): Playlist[] {
    return this.db.getAllSync<Playlist>('SELECT * FROM playlists ORDER BY sort_order DESC');
  }

  findPlaylist(id: Playlist['id']): Playlist | null {
    return this.db.getFirstSync<Playlist>('SELECT * FROM playlists WHERE id = ? ORDER BY sort_order ASC;', id);
  }

  findPlaylistSongs(id: Playlist['id']): PlaylistSong[] {
    return this.db.getAllSync<PlaylistSong>('SELECT * FROM playlist_songs WHERE playlist_id = ?;', id);
  }

  findPlaylistSong(id: Playlist['id']): PlaylistSong | null {
    return this.db.getFirstSync<PlaylistSong>('SELECT * FROM playlist_songs WHERE playlist_id = ? ORDER BY sort_order ASC;', id);
  }

  createPlaylist(name: Playlist['name'], songId: PlaylistSong['song_id']) {
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

  addPlaylistSong(playlistId: PlaylistSong['playlist_id'], songId: PlaylistSong['song_id']) {
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