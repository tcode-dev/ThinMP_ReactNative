import { useEffect, useState } from 'react';
import SongEditListPresenter from './SongEditListPresenter';
import { useSongsStore } from '@/store/songsStore';
import { SongModel } from '@/model/SongModel';

const SongEditListContainer = () => {
  // DraggableFlatListやFlatListを更新するにはstateを渡す必要がある
  // state.valueを渡した場合、itemを削除するとlistが表示されなくなる
  const [list, setList] = useState<SongModel[]>([]);
  const { state, update } = useSongsStore();

  useEffect(() => {
    if (state.isReady) {
      setList(state.value);
    }
  }, [state]);

  return <SongEditListPresenter songs={list} onDragEnd={update} />;
};

export default SongEditListContainer;
