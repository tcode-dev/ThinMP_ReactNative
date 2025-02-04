import { Stack } from 'expo-router';
import { useEffect } from 'react';
import BackButton from '@/components/molecules/button/BackButton';
import CustomHeaderBackground from '@/components/molecules/CustomHeaderBackground';
import Permission from '@/components/organisms/Permission';
import initializeDatabase from '@/database/initializeDatabase';

export default function RootLayout() {
  useEffect(() => {
    initializeDatabase();
  }, []);

  return (
    <Permission>
      <Stack
        screenOptions={({ navigation }) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
        })}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="artists/index" options={{ headerBackground: () => <CustomHeaderBackground title="Artists" /> }} />
        <Stack.Screen name="artists/[id]" />
        <Stack.Screen name="albums/index" options={{ headerBackground: () => <CustomHeaderBackground title="Albums" /> }} />
        <Stack.Screen name="albums/[id]" />
        <Stack.Screen name="songs" options={{ headerBackground: () => <CustomHeaderBackground title="Songs" /> }} />
        <Stack.Screen name="favoriteArtists" options={{ headerBackground: () => <CustomHeaderBackground title="Favorite Artists" /> }} />
        <Stack.Screen name="favoriteSongs" options={{ headerBackground: () => <CustomHeaderBackground title="Favorite Songs" /> }} />
        <Stack.Screen name="player" options={{ headerBackground: () => null }} />
        <Stack.Screen name="playlists/index" options={{ headerBackground: () => <CustomHeaderBackground title="Playlists" /> }} />
        <Stack.Screen name="playlists/add/[id]" options={{ presentation: 'transparentModal', animation: 'fade', headerShown: false, }} />
        <Stack.Screen name="playlists/[id]" />
      </Stack>
    </Permission>
  );
}
