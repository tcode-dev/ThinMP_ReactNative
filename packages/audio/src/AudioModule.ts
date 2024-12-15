import { NativeModule, requireNativeModule } from 'expo';

import { AlbumProps, ArtistDetailProps, ArtistProps, AudioModuleEvents, CurrentTimeProps, SongProps } from './Audio.types';

export { AlbumProps, ArtistDetailProps, ArtistProps, SongProps };

declare class AudioModule extends NativeModule<AudioModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
  getAllSongs(): Promise<SongProps[]>;
  getSongsByAlbumId(id: string): Promise<SongProps[]>;
  getSongsByArtistId(id: string): Promise<SongProps[]>;
  getAllAlbums(): Promise<AlbumProps[]>;
  getAlbumById(id: string): Promise<AlbumProps>;
  getAlbumsByArtistId(id: string): Promise<AlbumProps[]>;
  getAllArtists(): Promise<ArtistProps[]>;
  getArtistDetailById(id: string): Promise<ArtistDetailProps>;
  getArtwork(id: string): Promise<string | null>;
  checkPermission(): Promise<boolean>;
  requestPermission(): Promise<boolean>;
  startAllSongs(index: number): Promise<void>;
  startAlbumSongs(index: number, albumId: string): Promise<void>;
  startArtistSongs(index: number, artistId: string): Promise<void>;
  play(): Promise<void>;
  pause(): Promise<void>;
  prev(): Promise<void>;
  next(): Promise<void>;
  seek(time: number): Promise<void>;
  setRepeat(): Promise<void>;
  getCurrentTime(): Promise<CurrentTimeProps>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<AudioModule>('Audio');
