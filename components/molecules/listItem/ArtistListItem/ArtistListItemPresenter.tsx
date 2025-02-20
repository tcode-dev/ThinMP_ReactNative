import ContextMenu, { Props as ContextMenuProps } from '@/components/molecules/contextMenu/ContextMenu';
import PlainListItem from '@/components/molecules/listItem/PlainListItem';
import { ArtistModel } from '@/model/ArtistModel';

export type Props = {
  onPress: () => void;
} & ArtistModel &
  Pick<ContextMenuProps, 'list'>;

const ArtistListItemPresenter: React.FC<Props> = ({ name, list, onPress }) => (
  <ContextMenu list={list} onPress={onPress}>
    <PlainListItem>{name}</PlainListItem>
  </ContextMenu>
);

export default ArtistListItemPresenter;
