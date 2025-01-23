import { useCallback } from 'react';
import SongListItemPresenter, { Props as SongListItemPresenterProps } from './SongListItemPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { addFavoriteSong, existsFavoriteSong } from '@/repository/FavoriteSongRepository';
import { Play } from '@/type/Audio';

type Props = {
  index: number;
  play: Play;
} & Omit<SongListItemPresenterProps, 'borderBottomColor' | 'onPress' | 'list'>;

const SongListItemContainer: React.FC<Props> = ({ play, index, ...props }) => {
  const color = useThemeColor();
  const playlistBuilder = useCallback(() => ({ label: 'playlistに追加', callback: () => {} }), []);
  const onPress = useCallback(() => {
    play(index);
  }, [index, play]);
  const favoriteBuilder = useCallback(() => {
    if (existsFavoriteSong(props.id)) {
      return { label: 'お気に入りから削除', callback: () => addFavoriteSong(props.id) }
    } else {
      return { label: 'お気に入りに追加', callback: () => addFavoriteSong(props.id) }    }
  }, [props.id]);
  const builders = [favoriteBuilder, playlistBuilder];

  return <SongListItemPresenter onPress={onPress} builders={builders} {...props} borderBottomColor={color.border} />;
};

export default SongListItemContainer;
