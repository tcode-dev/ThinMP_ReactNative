import { LongTapContextMenu, LongTapContextMenuProps } from '@/components/molecules/contextMenu/ContextMenu';
import PlainListItem from '@/components/molecules/listItem/PlainListItem';
import { ArtistModel } from '@/model/ArtistModel';

export type Props = {
  onPress: () => void;
} & ArtistModel &
  Pick<LongTapContextMenuProps, 'list'>;

const ArtistListItemPresenter: React.FC<Props> = ({ name, list, onPress }) => (
  <LongTapContextMenu list={list} onPress={onPress}>
    <PlainListItem>{name}</PlainListItem>
  </LongTapContextMenu>
);

export default ArtistListItemPresenter;
