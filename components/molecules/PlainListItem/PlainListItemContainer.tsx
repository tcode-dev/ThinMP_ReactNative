import { useThemeColor } from '@/hooks/useThemeColor';
import PlainListItemPresenter, { Props } from './PlainListItemPresenter';

const PlainListItemContainer: React.FC<Pick<Props, 'children'>> = ({ children }) => {
  const color = useThemeColor();

  return <PlainListItemPresenter borderBottomColor={color.border}>{children}</PlainListItemPresenter>;
};

export default PlainListItemContainer;
