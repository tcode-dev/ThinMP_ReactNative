import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Audio.web.ts
// and on native platforms to Audio.ts
import AudioModule from './AudioModule';
import AudioView from './AudioView';
import { ChangeEventPayload, AudioViewProps, SongProps, AlbumProps, ArtistProps } from './Audio.types';

// Get the native constant value.
export const PI = AudioModule.PI;

export function hello(): string {
  return AudioModule.hello();
}

export async function getAllSongs(): Promise<SongProps[]> {
  return await AudioModule.getAllSongs();
}

export async function getSongsByAlbumId(id: string): Promise<SongProps[]> {
  return await AudioModule.getSongsByAlbumId(id);
}

export async function getAllAlbums(): Promise<AlbumProps[]> {
  return await AudioModule.getAllAlbums();
}

export async function getAlbumById(id: string): Promise<AlbumProps> {
  return await AudioModule.getAlbumById(id);
}

export async function getAllArtists(): Promise<ArtistProps[]> {
  return await AudioModule.getAllArtists();
}

export async function setValueAsync(value: string) {
  return await AudioModule.setValueAsync(value);
}

const emitter = new EventEmitter(AudioModule ?? NativeModulesProxy.Audio);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export async function getArtwork(id: string): Promise<string | null> {
  return await AudioModule.getArtwork(id);
}

export async function checkPermissionIos(): Promise<boolean> {
  return await Promise.resolve(AudioModule.checkPermission());
}

export async function requestPermissionIos(): Promise<boolean> {
  return await AudioModule.requestPermission();
}

export { AudioView, AudioViewProps, ChangeEventPayload, SongProps, AlbumProps };
