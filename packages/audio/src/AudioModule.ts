import { NativeModule, requireNativeModule } from 'expo';

import { AlbumProps, ArtistDetailProps, ArtistProps, AudioModuleEvents, CurrentTimeProps, SongProps, RepeatMode, ShuffleMode } from './Audio.types';

declare class AudioModule extends NativeModule<AudioModuleEvents> {
  getAllSongs(): Promise<SongProps[]>;
  getSongsByAlbumId(id: string): Promise<SongProps[]>;
  getSongsByArtistId(id: string): Promise<SongProps[]>;
  getSongsByIds(ids: string[]): Promise<SongProps[]>;
  getSongById(id: string): Promise<SongProps>;
  getAllAlbums(): Promise<AlbumProps[]>;
  getAlbumById(id: string): Promise<AlbumProps>;
  getAlbumsByArtistId(id: string): Promise<AlbumProps[]>;
  getRecentAlbums(count: number): Promise<AlbumProps[]>;
  getAllArtists(): Promise<ArtistProps[]>;
  getArtistDetailById(id: string): Promise<ArtistDetailProps>;
  getArtistsByIds(ids: string[]): Promise<ArtistProps[]>;
  getArtwork(id: string): Promise<string | null>;
  checkPermission(): Promise<boolean>;
  requestPermission(): Promise<boolean>;
  start(index: number, ids: string[]): void;
  startAllSongs(index: number): void;
  startAlbumSongs(index: number, albumId: string): void;
  startArtistSongs(index: number, artistId: string): void;
  play(): void;
  pause(): void;
  prev(): void;
  next(): void;
  seek(time: number): void;
  setRepeat(mode: RepeatMode): void;
  setShuffle(mode: ShuffleMode): void;
  getCurrentTime(): Promise<CurrentTimeProps>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<AudioModule>('Audio');
