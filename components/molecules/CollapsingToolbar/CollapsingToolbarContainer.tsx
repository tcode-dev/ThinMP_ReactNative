import { useStickyHeaderEndPoint } from '@/hooks/useStickyHeaderEndPoint';
import { useScrollY } from '@/hooks/useScrollY';
import { useHeaderTitleHeight } from '@/hooks/useHeaderTitleHeight';
import CollapsingToolbarPresenter, { TITLE_BOTTOM_POSITION, Props as CollapsingToolbarPresenterProps } from './CollapsingToolbarPresenter';

type Props = Pick<CollapsingToolbarPresenterProps, 'title' | 'description' | 'components' | 'background'>;

const CollapsingToolbarContainer: React.FC<Props> = (props) => {
  const height = useHeaderTitleHeight();
  const scrollY = useScrollY();
  const endPoint = useStickyHeaderEndPoint(TITLE_BOTTOM_POSITION);

  return <CollapsingToolbarPresenter height={height} scrollY={scrollY} endPoint={endPoint} {...props} />;
};

export default CollapsingToolbarContainer;
