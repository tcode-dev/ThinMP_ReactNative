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
      category
    );
  }

  deleteShortcut(id: string, category: ShortcutCategory) {
    this.db.runSync('DELETE FROM shortcuts WHERE id = ? AND category = ?', id, category);
  }

  updateShortcuts(list: Pick<ShortcutEntity, 'id' | 'category'>[]) {
    if (list.length === 0) return;

    const placeholders = list.map(() => '(?, ?, ?)').join(', ');
    const query = `
      INSERT INTO shortcuts (id, category, sort_order)
      VALUES ${placeholders};
    `;
    const values = list
      .slice()
      .reverse()
      .flatMap(({ id, category }, index) => [id, category, index + 1]);

    this.db.runSync('BEGIN TRANSACTION;');
    try {
      this.db.runSync('DELETE FROM shortcuts;');
      this.db.runSync(query, values);
      this.db.runSync('COMMIT;');
    } catch (error) {
      this.db.runSync('ROLLBACK;');
      throw error;
    }
  }

  deleteShortcuts(list: ShortcutEntity['id'][]) {
    if (list.length === 0) return;

    const placeholders = list.map(() => '?').join(', ');
    const query = `DELETE FROM shortcuts WHERE id IN (${placeholders});`;

    this.db.runSync(query, list);
  }
}
