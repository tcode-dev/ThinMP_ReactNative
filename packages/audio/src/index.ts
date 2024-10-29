import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Audio.web.ts
// and on native platforms to Audio.ts
import AudioModule from './AudioModule';
import AudioView from './AudioView';
import { ChangeEventPayload, AudioViewProps, SongsProps } from './Audio.types';

// Get the native constant value.
export const PI = AudioModule.PI;

export function hello(): string {
  return AudioModule.hello();
}

export function getAllSongs(): [SongsProps] {
  return AudioModule.getAllSongs();
}

export async function setValueAsync(value: string) {
  return await AudioModule.setValueAsync(value);
}

const emitter = new EventEmitter(AudioModule ?? NativeModulesProxy.Audio);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { AudioView, AudioViewProps, ChangeEventPayload };
