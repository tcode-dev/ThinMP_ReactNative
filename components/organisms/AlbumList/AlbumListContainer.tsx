import { Dimensions } from 'react-native';
import useAlbumsStore from '@/store/albumsStore';
import AlbumListPresenter from './AlbumListPresenter';

const AlbumListContainer = () => {
  const { state } = useAlbumsStore();

  if (!state.isReady) return null;

  const screenWidth = Dimensions.get('window').width;
  const itemWidth = (screenWidth - 20) / 2;
  const imageWidth = itemWidth - 20;

  return <AlbumListPresenter albums={state.value} itemWidth={itemWidth} imageWidth={imageWidth} />;
};

export default AlbumListContainer;
