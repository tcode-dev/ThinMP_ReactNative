import { LocalizationKeys } from '@/localize/localize';

export type MenuItem = {
  href: string;
  textKey: LocalizationKeys;
};

export const MainMenuMap: MenuItem[] = [
  { href: '/artists', textKey: 'artists' },
  { href: '/albums', textKey: 'albums' },
  { href: '/songs', textKey: 'songs' },
  { href: '/favoriteArtists', textKey: 'favoriteArtist' },
  { href: '/favoriteSongs', textKey: 'favoriteSong' },
  { href: '/playlists', textKey: 'playlists' },
];
