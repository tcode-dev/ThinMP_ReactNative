import AlbumListPresenter from './AlbumListPresenter';
import { useGridSize } from '@/hooks/useGridSize';
import { useAlbumsStore } from '@/store/albumsStore';

const AlbumListContainer = () => {
  const { state } = useAlbumsStore();
  const { itemWidth, imageWidth, gridCount } = useGridSize();

  if (!state.isReady) return null;

  return <AlbumListPresenter albums={state.value} itemWidth={itemWidth} imageWidth={imageWidth} gridCount={gridCount} />;
};

export default AlbumListContainer;
