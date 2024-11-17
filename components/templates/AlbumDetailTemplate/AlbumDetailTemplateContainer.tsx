import { Dimensions } from 'react-native';
import { useScrollY } from '@/hooks/useScrollY';
import useAlbumDetailStore from '@/store/albumDetailStore';
import { useStickyHeaderEndPoint } from '@/hooks/useStickyHeaderEndPoint';
import { useHeaderTitleHeight } from '@/hooks/useHeaderTitleHeight';
import AlbumDetailPresenter, { TITLE_BOTTOM_POSITION } from './AlbumDetailTemplatePresenter';

const AlbumDetailContainer = () => {
  const { state: albumDetailState } = useAlbumDetailStore();
  const width = Dimensions.get('window').width;
  const titleHeight = useHeaderTitleHeight();
  const scrollY = useScrollY();
  const endPoint = useStickyHeaderEndPoint(TITLE_BOTTOM_POSITION);

  if (!albumDetailState.isReady) return null;

  return <AlbumDetailPresenter albumDetail={albumDetailState.value} size={width} titleHeight={titleHeight} scrollY={scrollY} endPoint={endPoint} />;
};

export default AlbumDetailContainer;
