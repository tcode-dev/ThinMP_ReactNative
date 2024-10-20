import * as React from 'react';

import { AudioViewProps } from './Audio.types';

export default function AudioView(props: AudioViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
