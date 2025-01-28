import ContextMenu, { Props as ContextMenuProps } from '@/components/molecules/contextMenu/ContextMenu';
import PlainListItem from '@/components/molecules/listItem/PlainListItem';
import { ArtistProps } from 'audio';

export type Props = {
  onPress: () => void;
} & ArtistProps &
  Pick<ContextMenuProps, 'builders'>;

const ArtistListItemPresenter: React.FC<Props> = ({ name, builders, onPress }) => (
  <ContextMenu builders={builders} onPress={onPress}>
    <PlainListItem>{name}</PlainListItem>
  </ContextMenu>
);

export default ArtistListItemPresenter;
