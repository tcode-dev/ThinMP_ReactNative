import useAlbumsStore from '@/store/albumsStore';
import AlbumListPresenter from './AlbumListPresenter';

const AlbumListContainer = () => {
  const { state } = useAlbumsStore();

  if (state.isLoading) return null;

  if (state.isSuccess) return <AlbumListPresenter albums={state.value} />;

  return null;
}

export default AlbumListContainer;
