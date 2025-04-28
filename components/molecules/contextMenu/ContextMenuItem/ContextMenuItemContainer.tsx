import { useCallback } from 'react';
import ContextMenuItemPresenter from './ContextMenuItemPresenter';
import { useContextMenu } from '@/hooks/useContextMenu';
import { ContextMenuProps, useContextMenuStore } from '@/store/contextMenuStore';

type Props = {
  contextMenu: ContextMenuProps;
};

const ContextMenuItemContainer: React.FC<Props> = ({ contextMenu }) => {
  const { closeContextMenu } = useContextMenuStore();
  const menuItem = useContextMenu(contextMenu);
  const onPress = useCallback(() => {
    menuItem?.callback();
    closeContextMenu();
  }, [menuItem, closeContextMenu]);

  if (!menuItem) return null;

  return <ContextMenuItemPresenter label={menuItem.label} onPress={onPress} />;
};

export default ContextMenuItemContainer;
