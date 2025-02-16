import { getDatabase } from '@/database/database';
import { FavoriteSongEntity } from '@/type/Entity';

export class FavoriteSongRepository {
  private db = getDatabase();

  existsFavoriteSong(id: FavoriteSongEntity['id']): boolean {
    return this.db.getFirstSync('SELECT * FROM favorite_songs WHERE id = ?;', id) !== null;
  }

  findFavoriteSongs(): FavoriteSongEntity[] {
    return this.db.getAllSync<FavoriteSongEntity>('SELECT * FROM favorite_songs ORDER BY sort_order DESC');
  }

  addFavoriteSong(id: FavoriteSongEntity['id']) {
    this.db.runSync(
      `
    INSERT INTO favorite_songs (id, sort_order)
    VALUES (?, COALESCE((SELECT MAX(sort_order) FROM favorite_songs), 0) + 1);
  `,
      id,
    );
  }

  deleteFavoriteSong(id: FavoriteSongEntity['id']) {
    this.db.runSync('DELETE FROM favorite_songs WHERE id = ?', id);
  }
}