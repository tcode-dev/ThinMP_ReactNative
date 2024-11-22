import Constants from 'expo-constants';
import { Style } from '@/constants/Style';
import CustomHeaderBackgroundPresenter, { Props } from './CustomHeaderBackgroundPresenter';

const CustomHeaderBackgroundContainer: React.FC<Pick<Props, 'title'>> = ({ title }) => {
  const height = Style.headerTitleHeight + Constants.statusBarHeight;

  return <CustomHeaderBackgroundPresenter title={title} height={height} />;
};

export default CustomHeaderBackgroundContainer;
