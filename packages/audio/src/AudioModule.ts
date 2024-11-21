import { NativeModule, requireNativeModule } from 'expo';

import { AlbumProps, ArtistDetailProps, ArtistProps, AudioModuleEvents, SongProps } from './Audio.types';

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
  checkPermissionIos(): Promise<boolean>;
  requestPermissionIos(): Promise<boolean>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<AudioModule>('Audio');
