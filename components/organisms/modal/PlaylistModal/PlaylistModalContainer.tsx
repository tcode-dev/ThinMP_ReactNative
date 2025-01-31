import { useCallback } from 'react';
import PlaylistModalPresenter from './PlaylistModalPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';

const PlaylistModalContainer = () => {
  const color = useThemeColor();
  const done = useCallback(() => { }, []);
  const cancel = useCallback(() => { }, []);

  return <PlaylistModalPresenter borderColor={color.border} done={done} cancel={cancel} />;
};

export default PlaylistModalContainer;