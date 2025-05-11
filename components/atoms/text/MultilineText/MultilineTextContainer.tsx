import MultilineTextPresenter, { Props as MultilineTextPresenterProps } from './MultilineTextPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';

type Props = Pick<MultilineTextPresenterProps, 'children' | 'style'>;

const PlainTextContainer: React.FC<Props> = ({ children, style }) => {
  const color = useThemeColor();

  return (
    <MultilineTextPresenter color={color.text} style={style}>
      {children}
    </MultilineTextPresenter>
  );
};

export default PlainTextContainer;
