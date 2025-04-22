import { SongModel } from '@/model/SongModel';
import { FavoriteSongRepository } from '@/repository/FavoriteSongRepository';
import { PlaylistRepository } from '@/repository/PlaylistRepository';
import Audio from 'audio';

export class SongService {
  async getAllSongs(): Promise<SongModel[]> {
    const songs = await Audio.getAllSongs();

    return songs.map((song) => SongModel.fromDTO(song));
  }

  async getFavoriteSongs(): Promise<SongModel[]> {
    const favoriteSongRepository = new FavoriteSongRepository();
    const entities = favoriteSongRepository.findFavoriteSongs();
    const songIds = entities.map((song) => song.id);
    const songs = await Audio.getSongsByIds(songIds);
    const models = entities
      .map((entity) => songs.find((song) => song.id === entity.id))
      .filter((song) => song !== undefined)
      .map((song) => SongModel.fromDTO(song));

    if (entities.length !== models.length) {
      const modelIds = models.map((model) => model.id);
      const existsIds = entities
        .filter((entity) => modelIds.includes(entity.id))
        .map((entity) => entity.id);
      favoriteSongRepository.updateFavoriteSongs(existsIds);
  
      return this.getFavoriteSongs();
    }

    return models;
  }

  async getPlaylistSongs(id: string): Promise<SongModel[]> {
    const playlistRepository = new PlaylistRepository();
    const playlistSongs = playlistRepository.findPlaylistSongs(id as unknown as number);
    const songIds = playlistSongs.map((song) => song.song_id);
    const songs = await Audio.getSongsByIds(songIds);
    const filtered = playlistSongs.map((playlistSong) => songs.find((song) => song.id === playlistSong.song_id)).filter((song) => song !== undefined);

    return filtered.map((song) => SongModel.fromDTO(song));
  }

  async getSongsByArtistId(id: string): Promise<SongModel[]> {
    const songs = await Audio.getSongsByArtistId(id);

    return songs.map((song) => SongModel.fromDTO(song));
  }

  async getSongsByAlbumId(id: string): Promise<SongModel[]> {
    const songs = await Audio.getSongsByAlbumId(id);

    return songs.map((song) => SongModel.fromDTO(song));
  }

  async getSongsById(id: string): Promise<SongModel> {
    const song = await Audio.getSongById(id);

    return SongModel.fromDTO(song);
  }

  async getSongPlaylistId(id: string): Promise<SongModel | null> {
    const playlistRepository = new PlaylistRepository();
    const playlistSong = playlistRepository.findPlaylistSong(id as unknown as number);

    return playlistSong ? await this.getSongsById(playlistSong.song_id) : null;
  }
}
