import { Dimensions } from 'react-native';
import useAlbumDetailStore from '@/store/albumDetailStore';
import AlbumDetailPresenter from './AlbumDetailTemplatePresenter';

const AlbumDetailContainer = () => {
  const { state: albumDetailState } = useAlbumDetailStore();

  if (!albumDetailState.isReady) return null;

  const width = Dimensions.get('window').width;

  return <AlbumDetailPresenter albumDetail={albumDetailState.value} size={width} />;
};

export default AlbumDetailContainer;
