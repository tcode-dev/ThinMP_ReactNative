import ContextMenu from '../ContextMenu';
import ContextMenuItem from '../ContextMenuItem';
import ContextMenuPopup from '../ContextMenuPopup';

const SongContextMenuPresenter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ContextMenu menu={
    <ContextMenuPopup>
      <ContextMenuItem>お気に入り</ContextMenuItem>
      <ContextMenuItem>playlist</ContextMenuItem>
    </ContextMenuPopup>
  }>
    {children}
  </ContextMenu>
);

export default SongContextMenuPresenter;
