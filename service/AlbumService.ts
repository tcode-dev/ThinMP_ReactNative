import { AudioConstants } from '@/constants/AudioConstants';
import { AlbumModel } from '@/model/AlbumModel';
import Audio from 'audio';

export class AlbumService {
  async getAllAlbums(): Promise<AlbumModel[]> {
    const albums = await Audio.getAllAlbums();

    return albums.map(album => AlbumModel.fromPayload(album));
  }

  async getArtistAlbums(id: string): Promise<AlbumModel[]> {
    const albums = await Audio.getAlbumsByArtistId(id);

    return albums.map(album => AlbumModel.fromPayload(album));
  }

  async getRecentAlbums(): Promise<AlbumModel[]> {
    const albums = await Audio.getRecentAlbums(AudioConstants.RecentlyAddedCount);

    return albums.map(album => AlbumModel.fromPayload(album));
  }

  async getAlbumDetail(id: string): Promise<AlbumModel> {
    const album = await Audio.getAlbumById(id);

    return AlbumModel.fromPayload(album);
  }
}
