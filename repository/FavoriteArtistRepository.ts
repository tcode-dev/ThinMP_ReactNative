import { getDatabase } from '@/database/database';

type FavoriteArtist = { id: string; sort_order: number };

export class FavoriteArtistRepository {
  private db = getDatabase();

  existsFavoriteArtist(id: string): boolean {
    return this.db.getFirstSync('SELECT * FROM favorite_artists WHERE id = ?;', id) !== null;
  }

  findFavoriteArtists(): FavoriteArtist[] {
    return this.db.getAllSync('SELECT * FROM favorite_artists ORDER BY sort_order DESC');
  }

  addFavoriteArtist(id: FavoriteArtist['id']) {
    this.db.runSync(
      `
      INSERT INTO favorite_artists (id, sort_order)
      VALUES (?, COALESCE((SELECT MAX(sort_order) FROM favorite_artists), 0) + 1);
    `,
      id,
    );
  }

  deleteFavoriteArtist(id: FavoriteArtist['id']) {
    this.db.runSync('DELETE FROM favorite_artists WHERE id = ?', id);
  }
}
