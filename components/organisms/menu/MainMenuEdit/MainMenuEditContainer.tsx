import { useThemeColor } from '@/hooks/useThemeColor';
import MainMenuEditPresenter from './MainMenuEditPresenter';
import { useMainMenuEditStore } from '@/store/mainMenuEditStore';
import { useVisibilityStore } from '@/store/visibilityStore';
import { useEffect, useState } from 'react';
import { MainMenuModel } from '@/model/MainMenuModel';

const MainMenuEditContainer = () => {
  const { state, update } = useMainMenuEditStore();
  const { toggle } = useVisibilityStore();
  const color = useThemeColor();
  // const [list, setList] = useState<MainMenuModel[]>();

  // useEffect(() => {
  //   if (state.isReady) {
  //     setList(state.value);
  //   }
  // }, [state]);

  if (!state.isReady) return;

  return <MainMenuEditPresenter list={state.value} borderBottomColor={color.border} iconColor={color.icon} onPress={toggle} onDragEnd={update} />;
};

export default MainMenuEditContainer;
