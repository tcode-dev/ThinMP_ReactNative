export enum MainMenuConstant {
  artists = 'artists',
  albums = 'albums',
  songs = 'songs',
  favoriteArtists = 'favoriteArtists',
  favoriteSongs = 'favoriteSongs',
  playlists = 'playlists',
  shortcut = 'shortcut',
  recent = 'recent',
}

export const SortList = [
  MainMenuConstant.artists,
  MainMenuConstant.albums,
  MainMenuConstant.songs,
  MainMenuConstant.favoriteArtists,
  MainMenuConstant.favoriteSongs,
  MainMenuConstant.playlists,
] as const;

export type SortListType = typeof SortList;

export type VisibilityMapType = Map<MainMenuConstant, boolean>;

export const VisibilityMap = new Map<MainMenuConstant, boolean>([
  [MainMenuConstant.artists, true],
  [MainMenuConstant.albums, true],
  [MainMenuConstant.songs, true],
  [MainMenuConstant.favoriteSongs, true],
  [MainMenuConstant.favoriteArtists, true],
  [MainMenuConstant.playlists, true],
  [MainMenuConstant.shortcut, true],
  [MainMenuConstant.recent, true],
]);