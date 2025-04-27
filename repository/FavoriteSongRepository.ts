import { getDatabase } from '@/database/database';
import { FavoriteSongEntity } from '@/type/Entity';

export class FavoriteSongRepository {
  private db = getDatabase();

  existsFavoriteSong(id: FavoriteSongEntity['id']): boolean {
    return this.db.getFirstSync('SELECT * FROM favorite_songs WHERE id = ?;', id) !== null;
  }

  findFavoriteSongs(): FavoriteSongEntity[] {
    return this.db.getAllSync<FavoriteSongEntity>('SELECT * FROM favorite_songs ORDER BY sort_order ASC;');
  }

  addFavoriteSong(id: FavoriteSongEntity['id']) {
    this.db.runSync(
      `
        INSERT INTO favorite_songs (id, sort_order)
        VALUES (?, COALESCE((SELECT MAX(sort_order) FROM favorite_songs), 0) + 1);
      `,
      id
    );
  }

  deleteFavoriteSong(id: FavoriteSongEntity['id']) {
    this.db.runSync('DELETE FROM favorite_songs WHERE id = ?;', id);
  }

  updateFavoriteSongs(ids: FavoriteSongEntity['id'][]) {
    if (ids.length === 0) return;

    const placeholders = ids.map(() => '(?, ?)').join(', ');
    const query = `
      INSERT INTO favorite_songs (id, sort_order)
      VALUES ${placeholders};
    `;
    const values = ids.flatMap((id, index) => [id, index + 1]);

    this.db.runSync('BEGIN TRANSACTION;');
    try {
      this.db.runSync('DELETE FROM favorite_songs;');
      this.db.runSync(query, values);
      this.db.runSync('COMMIT;');
    } catch (error) {
      this.db.runSync('ROLLBACK;');
      throw error;
    }
  }
}
