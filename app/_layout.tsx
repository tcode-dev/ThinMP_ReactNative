import { Stack } from "expo-router";
import Permission from '@/components/organisms/common/Permission';

export default function RootLayout() {
  return (
    <Permission>
      <Stack
        screenOptions={{
          headerTitleAlign: 'center',
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
        }}>
        {/* Optionally configure static options outside the route.*/}
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </Permission>
  );
}
