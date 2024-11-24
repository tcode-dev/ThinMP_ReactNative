import SongListItemPresenter, { Props } from './SongListItemPresenter';

export { Props };

const SongListItemContainer: React.FC<Props> = (props) => {
  return <SongListItemPresenter {...props} />;
};

export default SongListItemContainer;
