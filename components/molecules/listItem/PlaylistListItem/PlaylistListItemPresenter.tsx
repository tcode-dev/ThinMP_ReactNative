import { LongTapContextMenu, LongTapContextMenuProps } from '@/components/molecules/contextMenu/ContextMenu';
import PlainListItem from '@/components/molecules/listItem/PlainListItem';
import { PlaylistModel } from '@/model/PlaylistModel';

export type Props = {
  onPress: () => void;
} & PlaylistModel &
  Pick<LongTapContextMenuProps, 'list'>;

const PlaylistListItemPresenter: React.FC<Props> = ({ name, list, onPress }) => (
  <LongTapContextMenu list={list} onPress={onPress}>
    <PlainListItem>{name}</PlainListItem>
  </LongTapContextMenu>
);

export default PlaylistListItemPresenter;
