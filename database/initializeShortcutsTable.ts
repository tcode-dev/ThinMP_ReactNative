import { getDatabase } from './database';

const initializeShortcutsTable = () => {
  const db = getDatabase();

  db.execSync(`
    CREATE TABLE IF NOT EXISTS shortcuts (
      id TEXT NOT NULL,
      category INTEGER NOT NULL,
      sort_order INTEGER NOT NULL,
      PRIMARY KEY (id, category)
    );
  `);
};

export default initializeShortcutsTable;
