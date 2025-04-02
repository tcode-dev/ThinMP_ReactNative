import { useCallback } from 'react';
import SongEditListItemPresenter, { Props as SongListItemPresenterProps } from './SongEditListItemPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';

type Props = {
  index: number;
} & Omit<SongListItemPresenterProps, 'borderBottomColor' | 'onPress' | 'list'>;

const SongEditListItemContainer: React.FC<Props> = ({ index, ...props }) => {
  const color = useThemeColor();
  const onPress = useCallback(() => {

  }, [index]);

  return <SongEditListItemPresenter onPress={onPress} {...props} borderBottomColor={color.border} />;
};

export default SongEditListItemContainer;
