import { Stack } from 'expo-router';
import { useEffect } from 'react';
import Permission from '@/components/organisms/Permission';
import initializeDatabase from '@/database/initializeDatabase';

export default function RootLayout() {
  useEffect(() => {
    initializeDatabase();
  }, []);

  return (
    <Permission>
      <Stack
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="artists/index" />
        <Stack.Screen name="artists/[id]" />
        <Stack.Screen name="albums/index" />
        <Stack.Screen name="albums/[id]" />
        <Stack.Screen name="songs" />
        <Stack.Screen name="favoriteArtists" />
        <Stack.Screen name="favoriteSongs" />
        <Stack.Screen name="favoriteSongsEdit" />
        <Stack.Screen name="playlists/index" />
        <Stack.Screen name="playlists/[id]" />
        <Stack.Screen name="player" />
      </Stack>
    </Permission>
  );
}
