import SongListItemPresenter, { Props as SongListItemPresenterProps } from './SongActionListItemPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';

type Props = Omit<SongListItemPresenterProps, 'borderBottomColor'>;

const SongActionListItemContainer: React.FC<Props> = (props) => {
  const color = useThemeColor();

  return <SongListItemPresenter {...props} borderBottomColor={color.border} />;
};

export default SongActionListItemContainer;
