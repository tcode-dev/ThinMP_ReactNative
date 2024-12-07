import PlayerPagePresenter from './PlayerPagePresenter';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import usePlaybackStore from '@/store/playbackStore';
import { Dimensions } from 'react-native';

const PlayerPageContainer = () => {
  const { bottom } = useSafeAreaInsets();
  const { state: playbackState } = usePlaybackStore();

  if (!playbackState.isReady) return null;

  const width = Dimensions.get('window').width;

  return <PlayerPagePresenter {...playbackState.value} size={width} bottom={bottom} />;
};

export default PlayerPageContainer;
