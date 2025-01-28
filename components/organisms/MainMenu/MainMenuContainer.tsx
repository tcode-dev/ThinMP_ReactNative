import MainMenuPresenter from './MainMenuPresenter';
import { MainMenuMap } from '@/constants/MainMenuMap';
import localize from '@/localize';

const MainMenuContainer = () => {
  const list = MainMenuMap.map((item) => ({ href: item.href, text: localize(item.textKey) }));

  return <MainMenuPresenter mainMenu={list} />;
};

export default MainMenuContainer;
