import { ArtistModel } from '@/model/ArtistModel';
import { FavoriteArtistRepository } from '@/repository/FavoriteArtistRepository';
import { FavoriteArtistEntity } from '@/type/Entity';
import Audio from 'audio';

export class ArtistService {
  private favoriteArtistRepository = new FavoriteArtistRepository();

  async getAllArtists(): Promise<ArtistModel[]> {
    const artists = await Audio.getAllArtists();

    return artists.map((artist) => ArtistModel.fromDTO(artist));
  }

  async getFavoriteArtists(): Promise<ArtistModel[]> {
    const entities = this.favoriteArtistRepository.findFavoriteArtists();
    const artistIds = entities.map((artist) => artist.id);
    const artists = await Audio.getArtistsByIds(artistIds);
    const models = entities
      .map((entity) => artists.find((artist) => artist.id === entity.id))
      .filter((artist) => artist !== undefined)
      .map((artist) => ArtistModel.fromDTO(artist));

    if (!this.validate(entities, models)) {
      this.fixFavoriteArtists(entities, models);

      return this.getFavoriteArtists();
    }

    return models;
  }

  async getArtistDetail(id: string): Promise<ArtistModel> {
    const artist = await Audio.getArtistDetailById(id);

    return ArtistModel.fromDTO(artist);
  }

  private validate<T1 extends any[], T2 extends any[]>(expected: T1, actual: T2): boolean {
    return expected.length === actual.length;
  }

  private fixFavoriteArtists(entities: FavoriteArtistEntity[], models: ArtistModel[]) {
    const modelIds = models.map((model) => model.id);
    const existsIds = entities
      .filter((entity) => modelIds.includes(entity.id))
      .map((entity) => entity.id);

    this.favoriteArtistRepository.updateFavoriteArtists(existsIds);
  }
}
