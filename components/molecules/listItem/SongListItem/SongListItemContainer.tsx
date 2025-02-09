import { Href, useRouter } from 'expo-router';
import { useCallback } from 'react';
import SongListItemPresenter, { Props as SongListItemPresenterProps } from './SongListItemPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import localize from '@/localize/localize';
import { addFavoriteSong, deleteFavoriteSong, existsFavoriteSong } from '@/repository/FavoriteSongRepository';
import { Play } from '@/type/Audio';

type Props = {
  index: number;
  play: Play;
} & Omit<SongListItemPresenterProps, 'borderBottomColor' | 'onPress' | 'builders'>;

const SongListItemContainer: React.FC<Props> = ({ play, index, ...props }) => {
  const color = useThemeColor();
  const router = useRouter();
  const playlistBuilder = useCallback(
    () => ({
      label: localize('playlistAdd'),
      callback: () => {
        router.push(`/playlists/add/${props.id}` as Href);
      },
    }),
    [props.id, router],
  );
  const onPress = useCallback(() => {
    play(index);
  }, [index, play]);
  const favoriteBuilder = useCallback(() => {
    if (existsFavoriteSong(props.id)) {
      return { label: localize('favoriteRemove'), callback: () => deleteFavoriteSong(props.id) };
    } else {
      return { label: localize('favoriteAdd'), callback: () => addFavoriteSong(props.id) };
    }
  }, [props.id]);
  const builders = [playlistBuilder, favoriteBuilder];

  return <SongListItemPresenter onPress={onPress} builders={builders} {...props} borderBottomColor={color.border} />;
};

export default SongListItemContainer;
