import { getDatabase } from '@/database/database';

export enum Category {
  Artist = 1,
  Album = 2,
  Playlist = 3,
}
export type ShortcutDTO = { id: string; category: Category; sort_order: number };

export class ShortcutRepository {
  private db = getDatabase();

  existsShortcut(id: ShortcutDTO['id'], category: Category): boolean {
    return this.db.getFirstSync('SELECT * FROM shortcuts WHERE id = ? AND category = ?;', id, category) !== null;
  }

  getShortcuts(): ShortcutDTO[] {
    return this.db.getAllSync<ShortcutDTO>('SELECT * FROM shortcuts ORDER BY sort_order DESC');
  }

  addShortcut(id: string, category: Category) {
    this.db.runSync(
      `
    INSERT INTO shortcuts (id, category, sort_order)
    VALUES (?, ?, COALESCE((SELECT MAX(sort_order) FROM shortcuts), 0) + 1);
  `,
      id,
      category,
    );
  }

  deleteShortcut(id: string, category: Category) {
    this.db.runSync('DELETE FROM shortcuts WHERE id = ? AND category = ?', id, category);
  }
}