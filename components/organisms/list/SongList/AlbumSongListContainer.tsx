import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import SongListPresenter, { Props } from './SongListPresenter';
import { useAlbumSongsStore } from '@/store/albumSongsStore';

const AlbumSongListContainer: React.FC<Props> = (props) => {
  const { id }: { id: string } = useLocalSearchParams();
  const { state, loadAlbumSongs } = useAlbumSongsStore();

  useEffect(() => {
    loadAlbumSongs(id);
  }, [id, loadAlbumSongs]);

  if (!state.isReady) return null;

  return <SongListPresenter songs={state.value} {...props} />;
};

export default AlbumSongListContainer;
