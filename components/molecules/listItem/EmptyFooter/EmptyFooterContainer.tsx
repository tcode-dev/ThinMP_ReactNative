import { useSafeAreaInsets } from 'react-native-safe-area-context';
import EmptyFooterPresenter from './EmptyFooterPresenter';
import { Style } from '@/constants/Style';

const EmptyFooterContainer: React.FC = () => {
  const insets = useSafeAreaInsets();
  const height = Style.rowHeight + insets.bottom;

  return <EmptyFooterPresenter height={height} />;
};

export default EmptyFooterContainer;
