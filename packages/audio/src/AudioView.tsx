import { requireNativeView } from 'expo';
import * as React from 'react';

import { AudioViewProps } from './Audio.types';

const NativeView: React.ComponentType<AudioViewProps> = requireNativeView('Audio');

export default function AudioView(props: AudioViewProps) {
  return <NativeView {...props} />;
}
