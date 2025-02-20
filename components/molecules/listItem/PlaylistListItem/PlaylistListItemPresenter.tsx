import ContextMenu, { Props as ContextMenuProps } from '@/components/molecules/contextMenu/ContextMenu';
import PlainListItem from '@/components/molecules/listItem/PlainListItem';
import { PlaylistModel } from '@/model/PlaylistModel';

export type Props = {
  onPress: () => void;
} & PlaylistModel &
  Pick<ContextMenuProps, 'list'>;

const PlaylistListItemPresenter: React.FC<Props> = ({ name, list, onPress }) => (
  <ContextMenu list={list} onPress={onPress}>
    <PlainListItem>{name}</PlainListItem>
  </ContextMenu>
);

export default PlaylistListItemPresenter;
