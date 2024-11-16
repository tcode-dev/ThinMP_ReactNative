import { Dimensions } from 'react-native';
import { useScrollY } from '@/hooks/useScrollY';
import useAlbumDetailStore from '@/store/albumDetailStore';
import useSongsStore from '@/store/songsStore';
import { useStickyHeaderEndPoint } from '@/hooks/useStickyHeaderEndPoint';
import { useHeaderTitleHeight } from '@/hooks/useHeaderTitleHeight';
import AlbumDetailPresenter, { TITLE_BOTTOM_POSITION } from './AlbumDetailTemplatePresenter';

const AlbumDetailContainer = () => {
  const { state: albumDetailState } = useAlbumDetailStore();
  const { state: songsState } = useSongsStore();
  const width = Dimensions.get('window').width;
  const titleHeight = useHeaderTitleHeight();
  const scrollY = useScrollY();
  const endPoint = useStickyHeaderEndPoint(TITLE_BOTTOM_POSITION);

  if (!albumDetailState.isReady) return null;
  if (!songsState.isReady) return null;

  return <AlbumDetailPresenter albumDetail={albumDetailState.value} songs={songsState.value} size={width} titleHeight={titleHeight} scrollY={scrollY} endPoint={endPoint} />;
};

export default AlbumDetailContainer;
