import { SongModel } from '@/model/SongModel';
import { FavoriteSongRepository } from '@/repository/FavoriteSongRepository';
import { PlaylistRepository } from '@/repository/PlaylistRepository';
import { FavoriteSongEntity, PlaylistSongEntity } from '@/type/Entity';
import Audio from 'audio';

export class SongService {
  private favoriteSongRepository = new FavoriteSongRepository();
  private playlistRepository = new PlaylistRepository();

  async getAllSongs(): Promise<SongModel[]> {
    const songs = await Audio.getAllSongs();

    return songs.map((song) => SongModel.fromDTO(song));
  }

  async getFavoriteSongs(): Promise<SongModel[]> {
    const entities = this.favoriteSongRepository.findFavoriteSongs();
    const songIds = entities.map((song) => song.id);
    const songs = await Audio.getSongsByIds(songIds);
    const models = entities
      .map((entity) => songs.find((song) => song.id === entity.id))
      .filter((song) => song !== undefined)
      .map((song) => SongModel.fromDTO(song));

    if (!this.validate(entities, models)) {
      this.fixFavoriteSongs(entities, models);

      return this.getFavoriteSongs();
    }

    return models;
  }

  async getPlaylistSongs(id: number): Promise<SongModel[]> {
    const entities = this.playlistRepository.findPlaylistSongs(id);
    const songIds = entities.map((song) => song.song_id);
    const songs = await Audio.getSongsByIds(songIds);
    const models = entities
      .map((entity) => songs.find((song) => song.id === entity.song_id))
      .filter((song) => song !== undefined)
      .map((song) => SongModel.fromDTO(song));

    if (!this.validate(entities, models)) {
      this.fixPlaylistSongs(id, entities, models);

      return this.getPlaylistSongs(id);
    }

    return models;
  }

  async getSongsByArtistId(id: string): Promise<SongModel[]> {
    const songs = await Audio.getSongsByArtistId(id);

    return songs.map((song) => SongModel.fromDTO(song));
  }

  async getSongsByAlbumId(id: string): Promise<SongModel[]> {
    const songs = await Audio.getSongsByAlbumId(id);

    return songs.map((song) => SongModel.fromDTO(song));
  }

  async getSongsById(id: string): Promise<SongModel | null> {
    const song = await Audio.getSongById(id);

    if (!song) {
      return null;
    }

    return SongModel.fromDTO(song);
  }

  async getSongPlaylistId(id: number): Promise<SongModel | null> {
    const playlistSong = this.playlistRepository.findPlaylistSong(id);

    return playlistSong ? await this.getSongsById(playlistSong.song_id) : null;
  }

  private validate<T1 extends any[], T2 extends any[]>(expected: T1, actual: T2): boolean {
    return expected.length === actual.length;
  }

  private fixFavoriteSongs(entities: FavoriteSongEntity[], models: SongModel[]) {
    const modelIds = models.map((model) => model.id);
    const existsIds = entities.filter((entity) => modelIds.includes(entity.id)).map((entity) => entity.id);

    this.favoriteSongRepository.updateFavoriteSongs(existsIds);
  }

  private fixPlaylistSongs(playlistId: number, entities: PlaylistSongEntity[], models: SongModel[]) {
    const modelIds = models.map((model) => model.id);
    const existsIds = entities.filter((entity) => modelIds.includes(entity.song_id)).map((entity) => entity.song_id);

    this.playlistRepository.updatePlaylistSongs(playlistId, existsIds);
  }
}
