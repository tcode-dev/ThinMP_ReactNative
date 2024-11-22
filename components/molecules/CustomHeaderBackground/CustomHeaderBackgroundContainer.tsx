import { getHeaderHeight } from '@/constants/Style';
import CustomHeaderBackgroundPresenter, { Props } from './CustomHeaderBackgroundPresenter';

const CustomHeaderBackgroundContainer: React.FC<Pick<Props, 'title'>> = ({ title }) => {
  const height = getHeaderHeight();

  return <CustomHeaderBackgroundPresenter title={title} height={height} />;
};

export default CustomHeaderBackgroundContainer;
