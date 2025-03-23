import { useThemeColor } from '@/hooks/useThemeColor';
import CheckBoxPresenter, { Props as CheckBoxPresenterProps } from './CheckBoxPresenter';

export type Props = Pick<CheckBoxPresenterProps, "isChecked" | "onPress">;

const CheckBoxContainer: React.FC<Props> = (props) => {
  const color = useThemeColor();

  return <CheckBoxPresenter {...props} color={color.icon} />;
};

export default CheckBoxContainer;
