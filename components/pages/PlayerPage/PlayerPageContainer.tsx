import { useEffect } from 'react';
import Audio from 'audio';
import useSongsStore from '@/store/songsStore';
import PlayerPagePresenter from './PlayerPagePresenter';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import usePlaybackStore from '@/store/playbackStore';
import useIsPlayingStore from '@/store/isPlayingStore';

const PlayerPageContainer = () => {
  const insets = useSafeAreaInsets();
  const { state: playbackState } = usePlaybackStore();

  if (!playbackState.isReady) return null;

  const play = (index: number) => {
    Audio.startAllSongs(index);
  };

  // useEffect(() => {
  //   fetchAllSongs();

  //   return () => {
  //     resetSongs();
  //   };
  // }, []);

  return <PlayerPagePresenter play={play} />;
};

export default PlayerPageContainer;
