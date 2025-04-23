import { NativeModule, requireNativeModule } from 'expo';

import { AlbumDTO, ArtistDTO, AudioModuleEvents, CurrentTimeDTO, SongDTO, RepeatMode, ShuffleMode } from './Audio.types';

declare class AudioModule extends NativeModule<AudioModuleEvents> {
  getAllSongs(): Promise<SongDTO[]>;
  getSongsByAlbumId(id: string): Promise<SongDTO[]>;
  getSongsByArtistId(id: string): Promise<SongDTO[]>;
  getSongsByIds(ids: string[]): Promise<SongDTO[]>;
  getSongById(id: string): Promise<SongDTO | null>;
  getAllAlbums(): Promise<AlbumDTO[]>;
  getAlbumById(id: string): Promise<AlbumDTO | null>;
  getAlbumsByArtistId(id: string): Promise<AlbumDTO[]>;
  getRecentAlbums(count: number): Promise<AlbumDTO[]>;
  getAllArtists(): Promise<ArtistDTO[]>;
  getArtistDetailById(id: string): Promise<ArtistDTO | null>;
  getArtistsByIds(ids: string[]): Promise<ArtistDTO[]>;
  getArtwork(id: string): Promise<string | null>;
  checkPermission(): Promise<boolean>;
  requestPermission(): Promise<boolean>;
  start(index: number, ids: string[], repeatMode: RepeatMode, shuffleMode: ShuffleMode): Promise<void>;
  startAllSongs(index: number, repeatMode: RepeatMode, shuffleMode: ShuffleMode): Promise<void>;
  startAlbumSongs(index: number, albumId: string, repeatMode: RepeatMode, shuffleMode: ShuffleMode): Promise<void>;
  startArtistSongs(index: number, artistId: string, repeatMode: RepeatMode, shuffleMode: ShuffleMode): Promise<void>;
  play(): Promise<void>;
  pause(): Promise<void>;
  prev(): Promise<void>;
  next(): Promise<void>;
  seek(time: number): Promise<void>;
  setRepeat(mode: RepeatMode): Promise<void>;
  setShuffle(mode: ShuffleMode): Promise<void>;
  getCurrentTime(): Promise<CurrentTimeDTO>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<AudioModule>('Audio');
