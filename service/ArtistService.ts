import { ArtistModel } from '@/model/ArtistModel';
import { FavoriteArtistRepository } from '@/repository/FavoriteArtistRepository';
import Audio from 'audio';

export class ArtistService {
  async getAllArtists(): Promise<ArtistModel[]> {
    const artists = await Audio.getAllArtists();

    return artists.map((artist) => ArtistModel.fromDTO(artist));
  }

  async getFavoriteArtists(): Promise<ArtistModel[]> {
    const favoriteArtistRepository = new FavoriteArtistRepository();
    const favoriteArtists = favoriteArtistRepository.findFavoriteArtists();
    const artistIds = favoriteArtists.map((artist) => artist.id);
    const artists = await Audio.getArtistsByIds(artistIds);

    return favoriteArtists
      .map((favoriteArtist) => artists.find((artist) => artist.id === favoriteArtist.id))
      .filter((artist) => artist !== undefined)
      .map((artist) => ArtistModel.fromDTO(artist));
  }

  async getArtistDetail(id: string): Promise<ArtistModel> {
    const artist = await Audio.getArtistDetailById(id);

    return ArtistModel.fromDTO(artist);
  }
}
