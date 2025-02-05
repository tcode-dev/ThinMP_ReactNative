import { getDatabase } from '@/database/database';
import { ShortcutModel } from '@/model/ShortcutModel';

export enum Category {
  Artist = 1,
  Album = 2,
  Playlist = 3,
}
export type Shortcut = { id: string; category: Category, sort_order: number };

export const existsShortcut = (id: string, category: Category): boolean => {
  const db = getDatabase();

  const result = db.getFirstSync('SELECT * FROM shortcuts WHERE id = ? AND category = ?;', id, category);

  return !!result;
};

export const getShortcuts = (): ShortcutModel[] => {
  const db = getDatabase();

  return db.getAllSync<Shortcut>('SELECT * FROM shortcuts ORDER BY sort_order DESC').map((row: any) => ({ id: row.id, category: row.category, order: row.sort_order }));
};

export const addShortcut = (id: string, category: Category) => {
  const db = getDatabase();

  db.runSync(
    `
    INSERT INTO shortcuts (id, category, sort_order)
    VALUES (?, ?, COALESCE((SELECT MAX(sort_order) FROM shortcuts), 0) + 1);
  `,
    id,
    category
  );
};

export const deleteShortcut = (id: string, category: Category) => {
  const db = getDatabase();

  db.runSync('DELETE FROM shortcuts WHERE id = ? AND category = ?', id, category);
};
