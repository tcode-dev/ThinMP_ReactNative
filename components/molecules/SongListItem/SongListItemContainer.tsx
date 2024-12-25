import { useThemeColor } from '@/hooks/useThemeColor';
import SongListItemPresenter, { Props as SongListItemPresenterProps } from './SongListItemPresenter';

type Props = Omit<SongListItemPresenterProps, 'borderBottomColor'>;

const SongListItemContainer: React.FC<Props> = (props) => {
  const color = useThemeColor();

  return <SongListItemPresenter {...props} borderBottomColor={color.border} />;
};

export default SongListItemContainer;
