import { getDatabase } from '@/database/database';
import { PlaylistEntity, PlaylistSongEntity } from '@/type/Entity';

export class PlaylistRepository {
  private db = getDatabase();

  existsPlaylist(id: PlaylistEntity['id']): boolean {
    return this.db.getFirstSync<PlaylistEntity>('SELECT * FROM playlists WHERE id = ?;', id) !== null;
  }

  findPlaylists(): PlaylistEntity[] {
    return this.db.getAllSync<PlaylistEntity>('SELECT * FROM playlists ORDER BY sort_order ASC');
  }

  findPlaylist(id: PlaylistEntity['id']): PlaylistEntity | null {
    return this.db.getFirstSync<PlaylistEntity>('SELECT * FROM playlists WHERE id = ? ORDER BY sort_order ASC;', id);
  }

  findPlaylistSongs(id: PlaylistEntity['id']): PlaylistSongEntity[] {
    return this.db.getAllSync<PlaylistSongEntity>('SELECT * FROM playlist_songs WHERE playlist_id = ?;', id);
  }

  findPlaylistSong(id: PlaylistEntity['id']): PlaylistSongEntity | null {
    return this.db.getFirstSync<PlaylistSongEntity>('SELECT * FROM playlist_songs WHERE playlist_id = ? ORDER BY sort_order ASC;', id);
  }

  createPlaylist(name: PlaylistEntity['name'], songId: PlaylistSongEntity['song_id']) {
    this.db.runSync(
      `
        INSERT INTO playlists (name, sort_order)
        VALUES (?, COALESCE((SELECT MAX(sort_order) FROM playlists), 0) + 1);
      `,
      name
    );

    const result = this.db.getFirstSync<{ id: number }>('SELECT last_insert_rowid() as id;');

    if (result === null) {
      return;
    }

    this.addPlaylistSong(result.id, songId);
  }

  addPlaylistSong(playlistId: PlaylistSongEntity['playlist_id'], songId: PlaylistSongEntity['song_id']) {
    this.db.runSync(
      `
        INSERT INTO playlist_songs (playlist_id, song_id, sort_order)
        VALUES (?, ?, COALESCE((SELECT MAX(sort_order) FROM playlist_songs WHERE playlist_id = ?), 0) + 1);
      `,
      playlistId,
      songId,
      playlistId
    );
  }

  updatePlaylists(ids: PlaylistEntity['id'][]) {
    if (ids.length === 0) {
      this.db.runSync('DELETE FROM playlist_songs;');
      this.db.runSync('DELETE FROM playlists;');
      return;
    }

    const deletePlaceholders = ids.map(() => '?').join(', ');
    const excludedPlaylists = this.db.getAllSync<PlaylistEntity>(`SELECT * FROM playlists WHERE id NOT IN (${deletePlaceholders});`, ids);
    const deleteIds = excludedPlaylists.map((playlist) => playlist.id);
    const updateCaseStatements = ids.reduce((acc, id, index) => `${acc} WHEN id = ? THEN ${index + 1}`, '');
    const query = `
      UPDATE playlists
      SET sort_order = CASE
        ${updateCaseStatements}
      END
      WHERE id IN (${ids.map(() => '?').join(', ')});
    `;
    const values = [...ids, ...ids];

    this.db.runSync('BEGIN TRANSACTION;');
    try {
      this.deletePlaylistSongs(deleteIds);
      this.deletePlaylists(deleteIds);
      this.db.runSync(query, values);
      this.db.runSync('COMMIT;');
    } catch (error) {
      this.db.runSync('ROLLBACK;');
      throw error;
    }
  }

  updatePlaylist(playlistId: PlaylistEntity['id'], name: PlaylistEntity['name'], songIds: PlaylistSongEntity['song_id'][]) {
    const placeholders = songIds.map(() => '(?, ?, ?)').join(', ');
    const query = `
      INSERT INTO playlist_songs (playlist_id, song_id, sort_order)
      VALUES ${placeholders};
    `;
    const values = songIds.flatMap((id, index) => [playlistId, id, index + 1]);

    this.db.runSync('BEGIN TRANSACTION;');
    try {
      this.db.runSync('UPDATE playlists SET name = ? WHERE id = ?;', name, playlistId);
      this.db.runSync('DELETE FROM playlist_songs WHERE playlist_id = ?;', playlistId);
      this.db.runSync(query, values);
      this.db.runSync('COMMIT;');
    } catch (error) {
      this.db.runSync('ROLLBACK;');
      throw error;
    }
  }

  updatePlaylistSongs(playlistId: PlaylistEntity['id'], songIds: PlaylistSongEntity['song_id'][]) {
    const placeholders = songIds.map(() => '(?, ?, ?)').join(', ');
    const query = `
      INSERT INTO playlist_songs (playlist_id, song_id, sort_order)
      VALUES ${placeholders};
    `;
    const values = songIds.flatMap((id, index) => [playlistId, id, index + 1]);

    this.db.runSync('BEGIN TRANSACTION;');
    try {
      this.db.runSync('DELETE FROM playlist_songs WHERE playlist_id = ?;', playlistId);
      this.db.runSync(query, values);
      this.db.runSync('COMMIT;');
    } catch (error) {
      this.db.runSync('ROLLBACK;');
      throw error;
    }
  }

  deletePlaylist(id: PlaylistEntity['id']) {
    this.db.runSync(`DELETE FROM playlists WHERE id = ?;`, id);
  }

  deletePlaylists(ids: PlaylistEntity['id'][]) {
    if (ids.length === 0) return;

    const placeholders = ids.map(() => '?').join(', ');
    const query = `DELETE FROM playlists WHERE id IN (${placeholders});`;

    this.db.runSync(query, ids);
  }

  deletePlaylistSongs(ids: PlaylistSongEntity['playlist_id'][]) {
    if (ids.length === 0) return;

    const placeholders = ids.map(() => '?').join(', ');
    const query = `DELETE FROM playlist_songs WHERE playlist_id IN (${placeholders});`;

    this.db.runSync(query, ids);
  }
}
