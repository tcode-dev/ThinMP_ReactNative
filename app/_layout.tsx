import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import CustomHeaderBackground from '@/components/molecules/CustomHeaderBackground';
import Permission from '@/components/organisms/Permission';

export default function RootLayout() {
  return (
    <Permission>
      <Stack
        screenOptions={({ navigation }) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
          ),
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
