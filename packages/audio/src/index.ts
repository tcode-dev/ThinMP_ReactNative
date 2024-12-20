// Reexport the native module. On web, it will be resolved to AudioModule.web.ts
// and on native platforms to AudioModule.ts
export { default, AlbumProps, ArtistDetailProps, ArtistProps, SongProps } from './AudioModule';
export { default as AudioView } from './AudioView';
export * from './Audio.types';
