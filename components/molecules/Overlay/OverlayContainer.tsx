import React, { useCallback } from 'react';
import OverlayPresenter from './OverlayPresenter';
import { useContextMenuStore } from '@/store/contextMenuStore';
import { useOverlayStore } from '@/store/overlayStore';

const OverlayContainer = () => {
  const { isOverlayEnabled, disableOverlay } = useOverlayStore();
  const { closeContextMenu } = useContextMenuStore();
  const callback = useCallback(() => {
    closeContextMenu();
    disableOverlay();
  }, [disableOverlay, closeContextMenu]);

  if (!isOverlayEnabled) {
    return null;
  }

  return <OverlayPresenter onPress={callback} />;
};

export default OverlayContainer;
