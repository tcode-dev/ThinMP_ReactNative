import { getDatabase } from "./database";

const initializeFavoriteSongsTable = () => {
  const db = getDatabase();

  db.execSync(`
PRAGMA journal_mode = WAL;
CREATE TABLE IF NOT EXISTS favorite_songs (
  id TEXT PRIMARY KEY NOT NULL,
  sort_order INTEGER NOT NULL
);
  `);
};

export default initializeFavoriteSongsTable;