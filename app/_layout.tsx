import { Stack } from "expo-router";
// import { BlurView } from 'expo-blur';
import Permission from '@/components/organisms/common/Permission';
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Permission>
      <Stack
        screenOptions={({ navigation }) => ({
          headerTitleAlign: 'center',
          headerTransparent: true,
          // headerBackground: () => (
          //   <BlurView
          //     tint="dark"
          //     intensity={100}
          //     style={StyleSheet.absoluteFill}
          //   />
          // ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
          ),
        })}>
        {/* Optionally configure static options outside the route.*/}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="albums/[id]" />
      </Stack>
    </Permission>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#aaaaaa',
  },
});