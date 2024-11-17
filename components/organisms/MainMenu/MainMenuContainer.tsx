import { MainMenuMap } from '@/constants/MainMenuMap';
import MainMenuPresenter from './MainMenuPresenter';

const MainMenuContainer = () => {
  return <MainMenuPresenter mainMenu={MainMenuMap} />;
};

export default MainMenuContainer;
