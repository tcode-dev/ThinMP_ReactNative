import { Stack } from 'expo-router';
import Permission from '@/components/organisms/Permission';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomHeaderBackground from '@/components/molecules/CustomHeaderBackground';

export default function RootLayout() {
  return (
    <Permission>
      <Stack
        screenOptions={({ navigation }) => ({
          headerTitle: '',
          headerBackground: () => null,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
          ),
        })}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="artists/index" options={{ headerBackground: () => <CustomHeaderBackground title='Artists' /> }} />
        <Stack.Screen name="artists/[id]" options={{ headerTransparent: true }} />
        <Stack.Screen name="albums/index" options={{ headerBackground: () => <CustomHeaderBackground title='Albums' /> }} />
        <Stack.Screen name="albums/[id]" options={{ headerTransparent: true }} />
        <Stack.Screen name="songs" options={{ headerBackground: () => <CustomHeaderBackground title='Songs' /> }} />
      </Stack>
    </Permission>
  );
}
