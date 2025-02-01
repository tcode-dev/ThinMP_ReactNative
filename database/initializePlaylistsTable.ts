import { getDatabase } from './database';

const initializePlaylistsTable = () => {
  const db = getDatabase();

  db.execSync(`
    CREATE TABLE IF NOT EXISTS playlists (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      sort_order INTEGER NOT NULL
    );
  `);
};

export default initializePlaylistsTable;
