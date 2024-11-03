import { Slot } from "expo-router";
import Permission from '@/components/organism/common/Permission';

export default function RootLayout() {
  return (
    <Permission>
      <Slot />
    </Permission>
  );
}
