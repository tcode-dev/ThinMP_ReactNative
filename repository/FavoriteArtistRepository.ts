import { getDatabase } from '@/database/database';
import { FavoriteArtistEntity } from '@/type/Entity';

export class FavoriteArtistRepository {
  private db = getDatabase();

  existsFavoriteArtist(id: string): boolean {
    return this.db.getFirstSync('SELECT * FROM favorite_artists WHERE id = ?;', id) !== null;
  }

  findFavoriteArtists(): FavoriteArtistEntity[] {
    return this.db.getAllSync('SELECT * FROM favorite_artists ORDER BY sort_order ASC');
  }

  addFavoriteArtist(id: FavoriteArtistEntity['id']) {
    this.db.runSync(
      `
        INSERT INTO favorite_artists (id, sort_order)
        VALUES (?, COALESCE((SELECT MAX(sort_order) FROM favorite_artists), 0) + 1);
      `,
      id
    );
  }

  deleteFavoriteArtist(id: FavoriteArtistEntity['id']) {
    this.db.runSync('DELETE FROM favorite_artists WHERE id = ?', id);
  }

  updateFavoriteArtists(ids: FavoriteArtistEntity['id'][]) {
    if (ids.length === 0) {
      this.db.runSync('DELETE FROM favorite_artists;');
      return;
    }

    const placeholders = ids.map(() => '(?, ?)').join(', ');
    const query = `
      INSERT INTO favorite_artists (id, sort_order)
      VALUES ${placeholders};
    `;
    const values = ids.flatMap((id, index) => [id, index + 1]);

    this.db.runSync('BEGIN TRANSACTION;');
    try {
      this.db.runSync('DELETE FROM favorite_artists;');
      this.db.runSync(query, values);
      this.db.runSync('COMMIT;');
    } catch (error) {
      this.db.runSync('ROLLBACK;');
      throw error;
    }
  }
}
