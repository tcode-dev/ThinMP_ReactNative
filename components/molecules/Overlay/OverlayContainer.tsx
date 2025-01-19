import React, { useCallback } from 'react';
import OverlayPresenter from './OverlayPresenter';
import { useContextMenuStore } from '@/store/contextMenuStore';
import { useOverlayStore } from '@/store/overlayStore';

const OverlayContainer = () => {
  const { isOverlayEnabled, disableOverlay } = useOverlayStore();
  const { resetContextMenu } = useContextMenuStore();
  const callback = useCallback(() => {
    resetContextMenu();
    disableOverlay();
  }, [disableOverlay, resetContextMenu]);

  if (!isOverlayEnabled) {
    return null;
  }

  return <OverlayPresenter onPress={callback} />;
};

export default OverlayContainer;
