import PlainTextPresenter, { Props as PlainTextPresenterProps } from './PlainTextPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';

export type Props = Pick<PlainTextPresenterProps, 'children' | 'style'>;

const PlainTextContainer: React.FC<Props> = ({ children, style }) => {
  const color = useThemeColor();

  return (
    <PlainTextPresenter color={color.text} style={style}>
      {children}
    </PlainTextPresenter>
  );
};

export default PlainTextContainer;
