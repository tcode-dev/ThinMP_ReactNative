import { useStickyHeaderEndPoint } from '@/hooks/useStickyHeaderEndPoint';
import CollapsingToolbarPresenter, { Props as CollapsingToolbarPresenterProps } from './CollapsingToolbarPresenter';
import { useScrollY } from '@/hooks/useScrollY';

type Props = {
  bottomPosition: number;
} & Pick<CollapsingToolbarPresenterProps, 'title' | 'components' | 'children'>;

const CollapsingToolbarContainer: React.FC<Props> = (props) => {
  const scrollY = useScrollY();
  const endPoint = useStickyHeaderEndPoint(props.bottomPosition);

  return <CollapsingToolbarPresenter scrollY={scrollY} endPoint={endPoint} {...props} />;
};

export default CollapsingToolbarContainer;
