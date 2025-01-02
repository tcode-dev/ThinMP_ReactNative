import MainMenuPresenter from './MainMenuPresenter';
import { MainMenuMap } from '@/constants/MainMenuMap';


const MainMenuContainer = () => {
  return <MainMenuPresenter mainMenu={MainMenuMap} />;
};

export default MainMenuContainer;
