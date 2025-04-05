import { useEffect, useState } from 'react';
import SongEditListPresenter from './SongEditListPresenter';
import { useSongsStore } from '@/store/songsStore';
import { SongModel } from '@/model/SongModel';

const SongEditListContainer = () => {
  const { state, update } = useSongsStore();
  const [list, setList] = useState<SongModel[]>([]);

  useEffect(() => {
    if (state.isReady) {
      setList(state.value);
    }
  }, [state]);

  return <SongEditListPresenter songs={list} onDragEnd={update} />;
};

export default SongEditListContainer;
