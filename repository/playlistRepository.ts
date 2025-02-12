import { getDatabase } from '@/database/database';

export type Playlist = { id: number; name: string; sort_order: number };
export type PlaylistSong = { playlist_id: number; song_id: string; sort_order: number };

export const existsPlaylist = (id: Playlist['id']): boolean => {
  const db = getDatabase();

  const result = db.getFirstSync<Playlist>('SELECT * FROM playlists WHERE id = ?;', id);

  return !!result;
};

export const getPlaylists = (): Playlist[] => {
  const db = getDatabase();

  return db.getAllSync<Playlist>('SELECT * FROM playlists ORDER BY sort_order DESC');
};

export const getPlaylist = (id: Playlist['id']): Playlist | null => {
  const db = getDatabase();

  return db.getFirstSync<Playlist>('SELECT * FROM playlists WHERE id = ? ORDER BY sort_order ASC;', id);
};

export const getPlaylistSongs = (id: Playlist['id']): PlaylistSong[] => {
  const db = getDatabase();

  return db.getAllSync<PlaylistSong>('SELECT * FROM playlist_songs WHERE playlist_id = ?;', id);
};

export const getPlaylistSong = (id: Playlist['id']): PlaylistSong | null => {
  const db = getDatabase();

  return db.getFirstSync<PlaylistSong>('SELECT * FROM playlist_songs WHERE playlist_id = ? ORDER BY sort_order ASC;', id);
};

export const createPlaylist = (name: Playlist['name'], songId: PlaylistSong['song_id']) => {
  const db = getDatabase();

  db.runSync(
    `
    INSERT INTO playlists (name, sort_order)
    VALUES (?, COALESCE((SELECT MAX(sort_order) FROM playlists), 0) + 1);
  `,
    name,
  );

  const result = db.getFirstSync<{ id: number }>('SELECT last_insert_rowid() as id;');

  if (result === null) {
    return;
  }

  addPlaylistSong(result.id, songId);
};

export const addPlaylistSong = (playlistId: PlaylistSong['playlist_id'], songId: PlaylistSong['song_id']) => {
  const db = getDatabase();

  db.runSync(
    `
    INSERT INTO playlist_songs (playlist_id, song_id, sort_order)
    VALUES (?, ?, COALESCE((SELECT MAX(sort_order) FROM playlist_songs WHERE playlist_id = ?), 0) + 1);
  `,
    playlistId,
    songId,
    playlistId,
  );
};
