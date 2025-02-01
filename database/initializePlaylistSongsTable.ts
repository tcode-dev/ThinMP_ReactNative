import { getDatabase } from './database';

const initializePlaylistSongsTable = () => {
  const db = getDatabase();

  db.execSync(`
    CREATE TABLE IF NOT EXISTS playlist_songs (
      playlist_id INTEGER NOT NULL,
      song_id TEXT NOT NULL,
      FOREIGN KEY (playlist_id) REFERENCES playlists(id) ON DELETE CASCADE
    );
  `);
};

export default initializePlaylistSongsTable;