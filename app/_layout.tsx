import { Stack } from 'expo-router';
import BackButton from '@/components/atoms/Button/BackButton';
import CustomHeaderBackground from '@/components/molecules/CustomHeaderBackground';
import Permission from '@/components/organisms/Permission';

export default function RootLayout() {
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
        <Stack.Screen name="player" options={{ headerBackground: () => null }} />
      </Stack>
    </Permission>
  );
}
