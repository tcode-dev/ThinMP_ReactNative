import CheckBoxListItemPresenter, { Props } from './CheckBoxListItemPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';

const CheckBoxListItemContainer: React.FC<Omit<Props, 'borderBottomColor' | 'backgroundColor'>> = ({ children, isChecked, onPress }) => {
  const color = useThemeColor();

  return (
    <CheckBoxListItemPresenter borderBottomColor={color.border} backgroundColor={color.background} isChecked={isChecked} onPress={onPress}>
      {children}
    </CheckBoxListItemPresenter>
  );
};

export default CheckBoxListItemContainer;
