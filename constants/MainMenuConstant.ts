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

export type SortableMenuType = [
  MainMenuConstant.artists,
  MainMenuConstant.albums,
  MainMenuConstant.songs,
  MainMenuConstant.favoriteArtists,
  MainMenuConstant.favoriteSongs,
  MainMenuConstant.playlists
];

export const DefaultSortList: SortableMenuType = [
  MainMenuConstant.artists,
  MainMenuConstant.albums,
  MainMenuConstant.songs,
  MainMenuConstant.favoriteArtists,
  MainMenuConstant.favoriteSongs,
  MainMenuConstant.playlists,
] as const;

export type VisibilityMapType = Map<MainMenuConstant, boolean>;

export const DefaultVisibilityMap = new Map<MainMenuConstant, boolean>([
  [MainMenuConstant.artists, true],
  [MainMenuConstant.albums, true],
  [MainMenuConstant.songs, true],
  [MainMenuConstant.favoriteSongs, true],
  [MainMenuConstant.favoriteArtists, true],
  [MainMenuConstant.playlists, true],
  [MainMenuConstant.shortcut, true],
  [MainMenuConstant.recent, true],
]);
