import { getDatabase } from '@/database/database';

export const existsFavoriteSong = (id: string) => {
  const db = getDatabase();

  const result = db.getFirstSync('SELECT * FROM favorite_songs WHERE id = ?;', id, 1);

  return !!result;
};

export const getFavoriteSongs = (): { id: string; order: number }[] => {
  const db = getDatabase();

  return db.getAllSync('SELECT * FROM favorite_songs ORDER BY sort_order DESC').map((row: any) => ({ id: row.id, order: row.sort_order }));
};

export const addFavoriteSong = (id: string) => {
  const db = getDatabase();

  db.runSync(`
    INSERT INTO favorite_songs (id, sort_order)
    VALUES (?, COALESCE((SELECT MAX(sort_order) FROM favorite_songs), 0) + 1);
  `, id);
};

export const deleteFavoriteSong = (id: string) => {
  const db = getDatabase();

  db.runSync('DELETE FROM favorite_songs WHERE id = ?', id);
};
