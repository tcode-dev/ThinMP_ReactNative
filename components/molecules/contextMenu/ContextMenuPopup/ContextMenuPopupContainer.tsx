import ContextMenuPopupPresenter from './ContextMenuPopupPresenter';
import { useContextMenuStore } from '@/store/contextMenuStore';

const ContextMenuPopupContainer = () => {
  const { contextMenu } = useContextMenuStore();

  if (!contextMenu.isOpen) return null;

  const style = {
    top: contextMenu.position.top,
    right: contextMenu.position.right,
  };

  return <ContextMenuPopupPresenter list={contextMenu.list} style={style} />;
};

export default ContextMenuPopupContainer;
