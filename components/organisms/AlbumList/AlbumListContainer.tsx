import useAlbumsStore from '@/store/albumsStore';
import AlbumListPresenter from './AlbumListPresenter';
import { Dimensions, FlatListProps } from 'react-native';

type Props = {
  scrollEnabled?: FlatListProps<any>['scrollEnabled'];
};

const AlbumListContainer = ({ scrollEnabled = true }: Props) => {
  const { state } = useAlbumsStore();

  if (state.isLoading) return null;

  if (!state.isSuccess) return null;

  const screenWidth = Dimensions.get('window').width;
  const itemWidth = (screenWidth - 30) / 2;
  const imageWidth = itemWidth - 20;

  return <AlbumListPresenter albums={state.value} itemWidth={itemWidth} imageWidth={imageWidth} scrollEnabled={scrollEnabled} />;
};

export default AlbumListContainer;
