import ContextMenu, { Props as ContextMenuProps } from '@/components/molecules/contextMenu/ContextMenu';
import PlainListItem from '@/components/molecules/listItem/PlainListItem';
import { PlaylistModel } from '@/model/PlaylistModel';

export type Props = {
  onPress: () => void;
} & PlaylistModel & Pick<ContextMenuProps, 'builders'>;

const PlaylistListItemPresenter: React.FC<Props> = ({ name, builders, onPress }) => (
  <ContextMenu builders={builders} onPress={onPress}>
    <PlainListItem>{name}</PlainListItem>
  </ContextMenu>
);

export default PlaylistListItemPresenter;
