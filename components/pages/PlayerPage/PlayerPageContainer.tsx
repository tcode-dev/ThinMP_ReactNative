import { useEffect } from 'react';
import Audio from 'audio';
import useSongsStore from '@/store/songsStore';
import PlayerPagePresenter from './PlayerPagePresenter';
import { useLocalSearchParams } from 'expo-router';

const PlayerPageContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const { fetchAllSongs, resetSongs } = useSongsStore();
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
