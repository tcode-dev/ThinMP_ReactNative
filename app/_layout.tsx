import { Stack } from 'expo-router';
import Permission from '@/components/organisms/common/Permission';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Permission>
      <Stack
        screenOptions={({ navigation }) => ({
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
          ),
        })}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="albums/index" options={{ headerTitle: 'Albums' }} />
        <Stack.Screen name="albums/[id]" options={{ headerTransparent: true, headerBackground: () => null }} />
        <Stack.Screen name="songs" options={{ headerTitle: 'Songs' }} />
      </Stack>
    </Permission>
  );
}
