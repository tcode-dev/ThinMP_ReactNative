import { getDatabase } from './database';

const initializeFavoriteArtistsTable = () => {
  const db = getDatabase();

  db.execSync(`
CREATE TABLE IF NOT EXISTS favorite_artists (
  id TEXT PRIMARY KEY NOT NULL,
  sort_order INTEGER NOT NULL
);
  `);
};

export default initializeFavoriteArtistsTable;
