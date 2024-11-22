import { useScrollY } from '@/hooks/useScrollY';
import CollapsingToolbarPresenter, { TITLE_BOTTOM_POSITION, Props as CollapsingToolbarPresenterProps } from './CollapsingToolbarPresenter';
import { Dimensions } from 'react-native';
import { Style } from '@/constants/Style';
import Constants from 'expo-constants';

type Props = Pick<CollapsingToolbarPresenterProps, 'title' | 'description' | 'components' | 'background'>;

const CollapsingToolbarContainer: React.FC<Props> = (props) => {
  const scrollY = useScrollY();
  const width = Dimensions.get('window').width;
  const endPoint = width - Style.headerTitleHeight - Constants.statusBarHeight - TITLE_BOTTOM_POSITION;

  return <CollapsingToolbarPresenter scrollY={scrollY} endPoint={endPoint} {...props} />;
};

export default CollapsingToolbarContainer;
