import { AudioConstants } from '@/constants/AudioConstants';
import { AlbumModel } from '@/model/AlbumModel';
import { ArtistModel } from '@/model/ArtistModel';
import { FavoriteArtistRepository } from '@/repository/FavoriteArtistRepository';
import Audio from 'audio';

export class ArtistService {
  async getAllArtists(): Promise<ArtistModel[]> {
    const artists = await Audio.getAllArtists();

    return artists.map(artist => ArtistModel.fromPayload(artist));
  }

  async getFavoriteArtists(): Promise<ArtistModel[]> {
    const favoriteArtistRepository = new FavoriteArtistRepository();
    const favoriteArtists = favoriteArtistRepository.findFavoriteArtists();
    const artistIds = favoriteArtists.map(artist => artist.id);
    const artists = await Audio.getArtistsByIds(artistIds);

    return artists.map(artist => ArtistModel.fromPayload(artist));
  }
}
