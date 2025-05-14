import EmptyFooter from '../listItem/EmptyFooter';
import CollapsingToolbarPresenter, { TITLE_BOTTOM_POSITION, Props as CollapsingToolbarPresenterProps } from './CollapsingToolbarPresenter';
import { getHeaderHeight } from '@/constants/Style';
import { useDevice } from '@/hooks/useDevice';
import { useScrollY } from '@/hooks/useScrollY';

type Props = Pick<CollapsingToolbarPresenterProps, 'title' | 'menu' | 'description' | 'components' | 'background'>;

const CollapsingToolbarContainer: React.FC<Props> = ({ components, ...props }) => {
  const scrollY = useScrollY();
  const { shortestSide } = useDevice();
  const headerHeight = getHeaderHeight();
  const endPoint = shortestSide - (headerHeight + TITLE_BOTTOM_POSITION);
  const list = [...components, <EmptyFooter key="footer" />];

  return <CollapsingToolbarPresenter scrollY={scrollY} endPoint={endPoint} components={list} {...props} />;
};

export default CollapsingToolbarContainer;
