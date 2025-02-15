import { SongModel } from '@/model/SongModel';
import { FavoriteSongRepository } from '@/repository/FavoriteSongRepository';
import { PlaylistRepository } from '@/repository/PlaylistRepository';
import Audio from 'audio';

export class SongService {
  async getAllSongs(): Promise<SongModel[]> {
    const songs = await Audio.getAllSongs();

    return songs.map(song => SongModel.fromPayload(song));
  }

  async getSongsByArtistId(id: string): Promise<SongModel[]> {
    const songs = await Audio.getSongsByArtistId(id);

    return songs.map(song => SongModel.fromPayload(song));
  }

  async getSongsByAlbumId(id: string): Promise<SongModel[]> {
    const songs = await Audio.getSongsByAlbumId(id);

    return songs.map(song => SongModel.fromPayload(song));
  }

  async getFavoriteSongs(): Promise<SongModel[]> {
    const favoriteSongRepository = new FavoriteSongRepository();
    const favoriteSongs = favoriteSongRepository.findFavoriteSongs();
    const songIds = favoriteSongs.map(song => song.id);
    const songs = await Audio.getSongsByIds(songIds);

    return songs.map(song => SongModel.fromPayload(song));
  }

  async getPlaylistSongs (id: string): Promise<SongModel[]> {
    const playlistRepository = new PlaylistRepository();
    const playlistSongs = playlistRepository.findPlaylistSongs(id as unknown as number);
    const songIds = playlistSongs.map(song => song.song_id);
    const songs = await Audio.getSongsByIds(songIds);
    const filtered = playlistSongs.map(playlistSong => songs.find(song => song.id === playlistSong.song_id)).filter(song => song !== undefined);

    return filtered.map(song => SongModel.fromPayload(song));
  }
}

