import AlbumListPresenter from './AlbumListPresenter';
import { useAlbumsStore } from '@/store/albumsStore';
import { useGridSize } from '@/hooks/useGridSize';

const AlbumListContainer = () => {
  const { state } = useAlbumsStore();
  const { itemWidth, imageWidth } = useGridSize();

  if (!state.isReady) return null;

  return <AlbumListPresenter albums={state.value} itemWidth={itemWidth} imageWidth={imageWidth} />;
};

export default AlbumListContainer;
