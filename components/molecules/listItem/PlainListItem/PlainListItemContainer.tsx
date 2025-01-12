import PlainListItemPresenter, { Props } from './PlainListItemPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';

const PlainListItemContainer: React.FC<Pick<Props, 'children'>> = ({ children }) => {
  const color = useThemeColor();

  return <PlainListItemPresenter borderBottomColor={color.border}>{children}</PlainListItemPresenter>;
};

export default PlainListItemContainer;
