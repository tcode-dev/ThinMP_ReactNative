import { NativeModule, requireNativeModule } from 'expo';

import { AlbumPayload, ArtistDetailPayload, ArtistPayload, AudioModuleEvents, CurrentTimePayload, SongPayload, RepeatMode, ShuffleMode } from './Audio.types';

declare class AudioModule extends NativeModule<AudioModuleEvents> {
  getAllSongs(): Promise<SongPayload[]>;
  getSongsByAlbumId(id: string): Promise<SongPayload[]>;
  getSongsByArtistId(id: string): Promise<SongPayload[]>;
  getSongsByIds(ids: string[]): Promise<SongPayload[]>;
  getSongById(id: string): Promise<SongPayload>;
  getAllAlbums(): Promise<AlbumPayload[]>;
  getAlbumById(id: string): Promise<AlbumPayload>;
  getAlbumsByArtistId(id: string): Promise<AlbumPayload[]>;
  getRecentAlbums(count: number): Promise<AlbumPayload[]>;
  getAllArtists(): Promise<ArtistPayload[]>;
  getArtistDetailById(id: string): Promise<ArtistDetailPayload>;
  getArtistsByIds(ids: string[]): Promise<ArtistPayload[]>;
  getArtwork(id: string): Promise<string | null>;
  checkPermission(): Promise<boolean>;
  requestPermission(): Promise<boolean>;
  start(index: number, ids: string[]): Promise<void>;
  startAllSongs(index: number): Promise<void>;
  startAlbumSongs(index: number, albumId: string): Promise<void>;
  startArtistSongs(index: number, artistId: string): Promise<void>;
  play(): Promise<void>;
  pause(): Promise<void>;
  prev(): Promise<void>;
  next(): Promise<void>;
  seek(time: number): Promise<void>;
  setRepeat(mode: RepeatMode): Promise<void>;
  setShuffle(mode: ShuffleMode): Promise<void>;
  getCurrentTime(): Promise<CurrentTimePayload>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<AudioModule>('Audio');
