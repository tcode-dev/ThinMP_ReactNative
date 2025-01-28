import { getDatabase } from '@/database/database';

export const existsFavoriteArtist = (id: string) => {
  const db = getDatabase();

  const result = db.getFirstSync('SELECT * FROM favorite_artists WHERE id = ?;', id, 1);

  return !!result;
};

export const getFavoriteArtists = (): { id: string; order: number }[] => {
  const db = getDatabase();

  return db.getAllSync('SELECT * FROM favorite_artists ORDER BY sort_order DESC').map((row: any) => ({ id: row.id, order: row.sort_order }));
};

export const addFavoriteArtist = (id: string) => {
  const db = getDatabase();

  db.runSync(
    `
    INSERT INTO favorite_artists (id, sort_order)
    VALUES (?, COALESCE((SELECT MAX(sort_order) FROM favorite_artists), 0) + 1);
  `,
    id,
  );
};

export const deleteFavoriteArtist = (id: string) => {
  const db = getDatabase();

  db.runSync('DELETE FROM favorite_artists WHERE id = ?', id);
};
