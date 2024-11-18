import { Dimensions } from 'react-native';
import useArtistDetailStore from '@/store/artistDetailStore';
import useAlbumsStore from '@/store/albumsStore';
import useSongsStore from '@/store/songsStore';
import ArtistDetailPresenter from './ArtistDetailTemplatePresenter';

const ArtistDetailContainer = () => {
  const { state: artistDetailState } = useArtistDetailStore();
  const { state: albumsState } = useAlbumsStore();
  const { state: songsState } = useSongsStore();
  const width = Dimensions.get('window').width;

  if (!artistDetailState.isReady) return null;
  if (!albumsState.isReady) return null;
  if (!songsState.isReady) return null;

  const description = `${albumsState.value.length} albums, ${songsState.value.length} songs`;

  return <ArtistDetailPresenter artistDetail={artistDetailState.value} description={description} size={width} />;
};

export default ArtistDetailContainer;
