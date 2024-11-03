import { Slot } from "expo-router";
import Permission from '@/components/organisms/common/Permission';

export default function RootLayout() {
  return (
    <Permission>
      <Slot />
    </Permission>
  );
}
