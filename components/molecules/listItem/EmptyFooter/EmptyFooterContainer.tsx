import { Style } from '@/constants/Style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import EmptyFooterPresenter from './EmptyFooterPresenter';

const EmptyFooterContainer: React.FC = () => {
  const insets = useSafeAreaInsets();
  const height = Style.rowHeight + insets.bottom;

  return <EmptyFooterPresenter height={height} />;
}

export default EmptyFooterContainer;
