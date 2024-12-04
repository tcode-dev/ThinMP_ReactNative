import * as React from 'react';

import { AudioViewProps } from './Audio.types';

export default function AudioView(props: AudioViewProps) {
  return (
    <div>
      <iframe style={{ flex: 1 }} src={props.url} onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })} />
    </div>
  );
}
