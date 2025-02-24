import { Stack } from 'expo-router';
import { useEffect } from 'react';
import BackButton from '@/components/molecules/button/BackButton';
import Permission from '@/components/organisms/Permission';
import initializeDatabase from '@/database/initializeDatabase';
import ArtistDetailMenuButton from '@/components/molecules/button/menu/ArtistDetailMenuButton';
import AlbumDetailMenuButton from '@/components/molecules/button/menu/AlbumDetailMenuButton';
import ArtistsHeaderBackground from '@/components/molecules/headerBackground/ArtistsHeaderBackground';
import AlbumsHeaderBackground from '@/components/molecules/headerBackground/AlbumsHeaderBackground';
import SongsHeaderBackground from '@/components/molecules/headerBackground/SongsHeaderBackground';
import FavoriteArtistsHeaderBackground from '@/components/molecules/headerBackground/FavoriteArtistsHeaderBackground';
import FavoriteSongsHeaderBackground from '@/components/molecules/headerBackground/FavoriteSongsHeaderBackground';
import PlaylistsHeaderBackground from '@/components/molecules/headerBackground/PlaylistsHeaderBackground';
import FavoriteArtistsMenuButton from '@/components/molecules/button/menu/FavoriteArtistsMenuButton';
import FavoriteSongsMenuButton from '@/components/molecules/button/menu/FavoriteSongsMenuButton';
import PlaylistsMenuButton from '@/components/molecules/button/menu/PlaylistsMenuButton';

export default function RootLayout() {
  useEffect(() => {
    initializeDatabase();
  }, []);

  return (
    <Permission>
      <Stack
        screenOptions={() => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => <BackButton />,
        })}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="artists/index" options={{ headerBackground: () => <ArtistsHeaderBackground /> }} />
        <Stack.Screen name="artists/[id]" options={{ headerRight: () => <ArtistDetailMenuButton /> }} />
        <Stack.Screen name="albums/index" options={{ headerBackground: () => <AlbumsHeaderBackground /> }} />
        <Stack.Screen name="albums/[id]" options={{ headerRight: () => <AlbumDetailMenuButton /> }} />
        <Stack.Screen name="songs" options={{ headerBackground: () => <SongsHeaderBackground /> }} />
        <Stack.Screen name="favoriteArtists" options={{ headerBackground: () => <FavoriteArtistsHeaderBackground />, headerRight: () => <FavoriteArtistsMenuButton /> }} />
        <Stack.Screen name="favoriteSongs" options={{ headerBackground: () => <FavoriteSongsHeaderBackground />, headerRight: () => <FavoriteSongsMenuButton /> }} />
        <Stack.Screen name="favoriteSongsEdit" options={{ headerBackground: () => <FavoriteSongsHeaderBackground /> }} />
        <Stack.Screen name="playlists/index" options={{ headerBackground: () => <PlaylistsHeaderBackground />, headerRight: () => <PlaylistsMenuButton /> }} />
        <Stack.Screen name="playlists/[id]" />
        <Stack.Screen name="player" options={{ headerBackground: () => null }} />
      </Stack>
    </Permission>
  );
}
