import { Dimensions } from 'react-native';
import CollapsingToolbarPresenter, { TITLE_BOTTOM_POSITION, Props as CollapsingToolbarPresenterProps } from './CollapsingToolbarPresenter';
import { getHeaderHeight } from '@/constants/Style';
import { useScrollY } from '@/hooks/useScrollY';

type Props = Pick<CollapsingToolbarPresenterProps, 'title' | 'description' | 'components' | 'background'>;

const CollapsingToolbarContainer: React.FC<Props> = (props) => {
  const scrollY = useScrollY();
  const width = Dimensions.get('window').width;
  const headerHeight = getHeaderHeight();
  const endPoint = width - (headerHeight + TITLE_BOTTOM_POSITION);

  return <CollapsingToolbarPresenter scrollY={scrollY} endPoint={endPoint} {...props} />;
};

export default CollapsingToolbarContainer;
