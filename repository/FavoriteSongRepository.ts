import { getDatabase } from '@/database/database';

export class FavoriteSongRepository {
  private db = getDatabase();

  existsFavoriteSong(id: string) {
    return this.db.getFirstSync('SELECT * FROM favorite_songs WHERE id = ?;', id) !== null;
  }

  findFavoriteSongs(): { id: string; order: number }[] {
    return this.db.getAllSync('SELECT * FROM favorite_songs ORDER BY sort_order DESC').map((row: any) => ({ id: row.id, order: row.sort_order }));
  }

  addFavoriteSong(id: string) {
    this.db.runSync(
      `
    INSERT INTO favorite_songs (id, sort_order)
    VALUES (?, COALESCE((SELECT MAX(sort_order) FROM favorite_songs), 0) + 1);
  `,
      id,
    );
  }

  deleteFavoriteSong(id: string) {
    this.db.runSync('DELETE FROM favorite_songs WHERE id = ?', id);
  }
}