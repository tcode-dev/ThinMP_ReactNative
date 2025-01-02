import { Platform } from 'react-native';
import CustomHeaderBackgroundPresenter, { Props } from './CustomHeaderBackgroundPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';


const CustomHeaderBackgroundContainer: React.FC<Pick<Props, 'title'>> = ({ title }) => {
  const color = useThemeColor();
  const style = Platform.select({
    android: {
      backgroundColor: color.background,
    },
  });
  return <CustomHeaderBackgroundPresenter title={title} style={style} />;
};

export default CustomHeaderBackgroundContainer;
