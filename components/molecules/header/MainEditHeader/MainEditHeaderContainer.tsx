import EditHeader from '../EditHeader';
import { useMainMenuEditStore } from '@/store/mainMenuEditStore';

const MainEditHeaderContainer = () => {
  const { saveMainMenu } = useMainMenuEditStore();

  return <EditHeader done={saveMainMenu}  />;
};

export default MainEditHeaderContainer;
