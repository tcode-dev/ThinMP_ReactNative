import { getDatabase } from '@/database/database';
import { PlaylistModel } from '@/model/PlaylistModel';
import { PlaylistSongModel } from '@/model/PlaylistSongModel';

type Playlist = { id: number; name: string, sort_order: number };
type PlaylistSong = { playlist_id: number; song_id: string, sort_order: number };

export const existsPlaylist = (id: Playlist['id']): boolean => {
  const db = getDatabase();

  const result = db.getFirstSync<Playlist>('SELECT * FROM playlists WHERE id = ?;', id);

  return !!result;
};

export const getPlaylists = (): PlaylistModel[] => {
  const db = getDatabase();

  return db.getAllSync<Playlist>('SELECT * FROM playlists ORDER BY sort_order DESC').map((row) => ({
    id: row.id,
    name: row.name,
    order: row.sort_order,
  }));
};

export const getPlaylist = (id: Playlist['id']): PlaylistModel | null => {
  const db = getDatabase();

  const result = db.getFirstSync<Playlist>('SELECT * FROM playlists WHERE id = ?;', id);

  if (result === null) {
    return null;
  }

  return {
    id: result.id,
    name: result.name,
    order: result.sort_order,
  };
};

export const getPlaylistSongs = (id: Playlist['id']): PlaylistSongModel[] => {
  const db = getDatabase();

  return db.getAllSync<PlaylistSong>('SELECT * FROM playlist_songs WHERE playlist_id = ?;', id).map((row) => ({
    playlistId: row.playlist_id,
    songId: row.song_id,
    order: row.sort_order,
  }));
};

export const createPlaylist = (name: Playlist['name'], songId: PlaylistSong['song_id']) => {
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

export const addPlaylistSong = (playlistId: PlaylistSong['playlist_id'], songId: PlaylistSong['song_id']) => {
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
