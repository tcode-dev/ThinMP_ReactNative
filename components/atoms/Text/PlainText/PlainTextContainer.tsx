import { useThemeColor } from '@/hooks/useThemeColor';
import PlainTextPresenter, { Props as PlainTextPresenterProps } from './PlainTextPresenter';

export type Props = Pick<PlainTextPresenterProps, 'children' | 'style'>

const PlainText: React.FC<Props> = ({ style, children }) => {
  const color = useThemeColor();

  return (
    <PlainTextPresenter color={color.text} style={style}>
      {children}
    </PlainTextPresenter>
  );
};

export default PlainText;
