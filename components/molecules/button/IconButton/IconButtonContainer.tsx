import { useThemeColor } from '@/hooks/useThemeColor';
import IconButtonPresenter, { Props as IconButtonPresenterProps } from './IconButtonPresenter';

type Props = Pick<IconButtonPresenterProps, 'children' | 'onPress' | 'size'>;

const IconButtonContainer: React.FC<Props> = ({ children, ...props }) => {
  const color = useThemeColor();

  return (
    <IconButtonPresenter color={color.icon} {...props}>
      {children}
    </IconButtonPresenter>
  );
};

export default IconButtonContainer;
