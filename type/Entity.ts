export type FavoriteArtistEntity = { id: string; sort_order: number };
export type FavoriteSongEntity = { id: string; sort_order: number };
export type PlaylistEntity = { id: number; name: string; sort_order: number };
export type PlaylistSongEntity = { playlist_id: number; song_id: string; sort_order: number };
export type ShortcutEntity = { id: string; category: ShortcutCategory; sort_order: number };
export enum ShortcutCategory {
  Artist = 1,
  Album = 2,
  Playlist = 3,
};
