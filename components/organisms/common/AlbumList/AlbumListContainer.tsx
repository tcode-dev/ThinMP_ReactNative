import useAlbumsStore from '@/store/albumsStore';
import AlbumListPresenter from './AlbumListPresenter';
import { Dimensions } from 'react-native';

const AlbumListContainer = () => {
  const { state } = useAlbumsStore();

  if (state.isLoading) return null;

  if (!state.isSuccess) return null;

  const screenWidth = Dimensions.get('window').width;
  const itemWidth = (screenWidth - 30) / 2;
  const imageWidth = itemWidth - 20;

  return <AlbumListPresenter albums={state.value} itemWidth={itemWidth} imageWidth={imageWidth} />;
};

export default AlbumListContainer;
