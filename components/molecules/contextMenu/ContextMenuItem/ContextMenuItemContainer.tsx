import { useCallback } from 'react';
import ContextMenuItemPresenter from './ContextMenuItemPresenter';
import { useContextMenu } from '@/hooks/useContextMenu';
import { ContextMenuProps, useContextMenuStore } from '@/store/contextMenuStore';

type Props = {
  contextMenu: ContextMenuProps;
};

const ContextMenuItemContainer: React.FC<Props> = ({ contextMenu }) => {
  const { closeContextMenu } = useContextMenuStore();
  const { label, callback } = useContextMenu(contextMenu);
  const onPress = useCallback(() => {
    callback();
    closeContextMenu();
  }, [callback, closeContextMenu]);

  return <ContextMenuItemPresenter label={label} onPress={onPress} />;
};

export default ContextMenuItemContainer;
