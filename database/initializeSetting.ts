import { getDatabase } from './database';

const initializeSetting = () => {
  const db = getDatabase();

  db.execSync(`PRAGMA journal_mode = WAL;`);
};

export default initializeSetting;
