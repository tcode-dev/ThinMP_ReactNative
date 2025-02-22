import React, { useCallback } from 'react';
import OverlayPresenter from './OverlayPresenter';
import { useContextMenuStore } from '@/store/contextMenuStore';

const OverlayContainer = () => {
  const { closeContextMenu } = useContextMenuStore();
  const callback = useCallback(() => {
    closeContextMenu();
  }, [closeContextMenu]);

  return <OverlayPresenter onPress={callback} />;
};

export default OverlayContainer;
