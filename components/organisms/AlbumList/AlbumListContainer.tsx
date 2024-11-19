import useAlbumsStore from '@/store/albumsStore';
import AlbumListPresenter, { Props as AlbumListPresenterProps } from './AlbumListPresenter';
import { Dimensions } from 'react-native';

const AlbumListContainer = ({ scrollEnabled }: Pick<AlbumListPresenterProps, 'scrollEnabled'>) => {
  const { state } = useAlbumsStore();

  if (!state.isReady) return null;

  const screenWidth = Dimensions.get('window').width;
  const itemWidth = (screenWidth - 30) / 2;
  const imageWidth = itemWidth - 20;

  return <AlbumListPresenter albums={state.value} itemWidth={itemWidth} imageWidth={imageWidth} scrollEnabled={scrollEnabled} />;
};

export default AlbumListContainer;
