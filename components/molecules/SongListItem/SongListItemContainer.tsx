import { useThemeColor } from '@/hooks/useThemeColor';
import SongListItemPresenter, { Props } from './SongListItemPresenter';

export { Props };

const SongListItemContainer: React.FC<Props> = (props) => {
  const color = useThemeColor();

  return <SongListItemPresenter {...props} borderBottomColor={color.borderColor} />;
};

export default SongListItemContainer;
