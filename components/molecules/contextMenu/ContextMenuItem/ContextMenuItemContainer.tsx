import { useCallback } from 'react';
import ContextMenuItemPresenter from './ContextMenuItemPresenter';
import { ContextMenuBuilderProps, useContextMenuStore } from '@/store/contextMenuStore';
import { useOverlayStore } from '@/store/overlayStore';

type Props = {
  builder: ContextMenuBuilderProps;
};
const ContextMenuItemContainer: React.FC<Props> = ({ builder }) => {
  const { resetContextMenu } = useContextMenuStore();
  const { disableOverlay } = useOverlayStore();
  const { label, callback } = builder();
  const onPress = useCallback(() => {
    callback();
    resetContextMenu();
    disableOverlay();
  }, [callback, disableOverlay, resetContextMenu]);

  return <ContextMenuItemPresenter label={label} onPress={onPress} />;
};

export default ContextMenuItemContainer;
