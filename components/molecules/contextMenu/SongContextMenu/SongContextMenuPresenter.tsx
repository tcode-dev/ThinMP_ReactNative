import ContextMenu, { Props as ContextMenuProps } from '../ContextMenu';
import ContextMenuItem from '../ContextMenuItem';
import ContextMenuPopup from '../ContextMenuPopup';

type Props = Pick<ContextMenuProps, 'onPress' | 'children'>;

const SongContextMenuPresenter: React.FC<Props> = ({ onPress, children }) => (
  <ContextMenu menu={
    <ContextMenuPopup>
      <ContextMenuItem>お気に入り</ContextMenuItem>
      <ContextMenuItem>playlist</ContextMenuItem>
    </ContextMenuPopup>
  }
    onPress={onPress}
  >
    {children}
  </ContextMenu>
);

export default SongContextMenuPresenter;
