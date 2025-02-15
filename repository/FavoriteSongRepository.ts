import { getDatabase } from '@/database/database';

type FavoriteSong = { id: string; sort_order: number };

export class FavoriteSongRepository {
  private db = getDatabase();

  existsFavoriteSong(id: FavoriteSong['id']): boolean {
    return this.db.getFirstSync('SELECT * FROM favorite_songs WHERE id = ?;', id) !== null;
  }

  findFavoriteSongs(): FavoriteSong[] {
    return this.db.getAllSync<FavoriteSong>('SELECT * FROM favorite_songs ORDER BY sort_order DESC');
  }

  addFavoriteSong(id: FavoriteSong['id']) {
    this.db.runSync(
      `
    INSERT INTO favorite_songs (id, sort_order)
    VALUES (?, COALESCE((SELECT MAX(sort_order) FROM favorite_songs), 0) + 1);
  `,
      id,
    );
  }

  deleteFavoriteSong(id: FavoriteSong['id']) {
    this.db.runSync('DELETE FROM favorite_songs WHERE id = ?', id);
  }
}