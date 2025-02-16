import { getDatabase } from '@/database/database';
import { ShortcutCategory, ShortcutEntity } from '@/type/Entity';

export class ShortcutRepository {
  private db = getDatabase();

  existsShortcut(id: ShortcutEntity['id'], category: ShortcutCategory): boolean {
    return this.db.getFirstSync('SELECT * FROM shortcuts WHERE id = ? AND category = ?;', id, category) !== null;
  }

  getShortcuts(): ShortcutEntity[] {
    return this.db.getAllSync<ShortcutEntity>('SELECT * FROM shortcuts ORDER BY sort_order DESC');
  }

  addShortcut(id: string, category: ShortcutCategory) {
    this.db.runSync(
      `
    INSERT INTO shortcuts (id, category, sort_order)
    VALUES (?, ?, COALESCE((SELECT MAX(sort_order) FROM shortcuts), 0) + 1);
  `,
      id,
      category,
    );
  }

  deleteShortcut(id: string, category: ShortcutCategory) {
    this.db.runSync('DELETE FROM shortcuts WHERE id = ? AND category = ?', id, category);
  }
}