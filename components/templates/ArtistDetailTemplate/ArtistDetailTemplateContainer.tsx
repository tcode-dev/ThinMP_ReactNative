import { Dimensions } from 'react-native';
import { useScrollY } from '@/hooks/useScrollY';
import useArtistDetailStore from '@/store/artistDetailStore';
import useAlbumsStore from '@/store/albumsStore';
import useSongsStore from '@/store/songsStore';
import { useHeaderTitleHeight } from '@/hooks/useHeaderTitleHeight';
import ArtistDetailPresenter, { TITLE_BOTTOM_POSITION } from './ArtistDetailTemplatePresenter';
import { useStickyHeaderEndPoint } from '@/hooks/useStickyHeaderEndPoint';

const ArtistDetailContainer = () => {
  const { state: artistDetailState } = useArtistDetailStore();
  const { state: albumsState } = useAlbumsStore();
  const { state: songsState } = useSongsStore();
  const width = Dimensions.get('window').width;
  const titleHeight = useHeaderTitleHeight();
  const scrollY = useScrollY();
  const endPoint = useStickyHeaderEndPoint(TITLE_BOTTOM_POSITION);

  if (!artistDetailState.isReady) return null;
  if (!albumsState.isReady) return null;
  if (!songsState.isReady) return null;

  return <ArtistDetailPresenter artistDetail={artistDetailState.value} description='description' albums={albumsState.value} songs={songsState.value} size={width} titleHeight={titleHeight} scrollY={scrollY} endPoint={endPoint} />;
};

export default ArtistDetailContainer;
