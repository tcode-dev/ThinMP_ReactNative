import { useHeaderTitleHeight } from '@/hooks/useHeaderTitleHeight';
import CustomHeaderBackgroundPresenter, { Props } from './CustomHeaderBackgroundPresenter';

const StickyHeaderContainer: React.FC<Pick<Props, 'title'>> = ({ title }) => {
  const height = useHeaderTitleHeight();

  return <CustomHeaderBackgroundPresenter height={height} title={title} />;
};

export default StickyHeaderContainer;
