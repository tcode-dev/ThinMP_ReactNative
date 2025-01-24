import { useRef } from 'react';
import { View } from 'react-native';
import ContextMenuPopupPresenter from './ContextMenuPopupPresenter';
import { useContextMenuStore } from '@/store/contextMenuStore';

const ContextMenuPopupContainer = () => {
  const { contextMenu } = useContextMenuStore();
  const containerRef = useRef<View>(null);

  if (!contextMenu.isOpen) return null;

  const style = {
    top: contextMenu.position.top,
    right: contextMenu.position.right,
  };

  return <ContextMenuPopupPresenter ref={containerRef} builders={contextMenu.builders} style={style} />;
};

export default ContextMenuPopupContainer;
