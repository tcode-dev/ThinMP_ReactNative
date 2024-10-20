import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { AudioViewProps } from './Audio.types';

const NativeView: React.ComponentType<AudioViewProps> =
  requireNativeViewManager('Audio');

export default function AudioView(props: AudioViewProps) {
  return <NativeView {...props} />;
}
