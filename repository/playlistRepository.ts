import { getDatabase } from '@/database/database';

type Playlist = { id: number; name: string, sort_order: number };
type PlaylistSong = { playlist_id: number; song_id: string, sort_order: number };

export const getPlaylists = (): Playlist[] => {
  const db = getDatabase();

  return db.getAllSync('SELECT * FROM playlists ORDER BY sort_order DESC');
};

export const getPlaylist = (id: number): Playlist | null => {
  const db = getDatabase();

  return db.getFirstSync<Playlist>('SELECT * FROM playlists WHERE id = ?;', id);
};

export const getPlaylistSongs = (id: number): PlaylistSong[] => {
  const db = getDatabase();

  return db.getFirstSync<PlaylistSong[]>('SELECT * FROM playlist_songs WHERE playlist_id = ?;', id) ?? [];
};

export const createPlaylist = (name: string, songId: string) => {
  const db = getDatabase();

  db.runSync(
    `
    INSERT INTO playlists (name, sort_order)
    VALUES (?, COALESCE((SELECT MAX(sort_order) FROM playlists), 0) + 1);
  `,
    name
  );

  const result = db.getFirstSync<{ id: number }>('SELECT last_insert_rowid() as id;');

  if (result === null) {
    return;
  }

  addPlaylistSong(result.id, songId);
};

export const addPlaylistSong = (playlistId: number, songId: string) => {
  const db = getDatabase();

  db.runSync(
    `
    INSERT INTO playlist_songs (playlist_id, song_id, sort_order)
    VALUES (?, ?, COALESCE((SELECT MAX(sort_order) FROM playlist_songs WHERE playlist_id = ?), 0) + 1);
  `,
    playlistId,
    songId,
    playlistId
  );
};
