import { useCallback } from 'react';
import ContextMenuItemPresenter from './ContextMenuItemPresenter';
import { ContextMenuBuilderProps, useContextMenuStore } from '@/store/contextMenuStore';
import { useOverlayStore } from '@/store/overlayStore';

type Props = {
  builder: ContextMenuBuilderProps;
};
const ContextMenuItemContainer: React.FC<Props> = ({ builder }) => {
  const { closeContextMenu } = useContextMenuStore();
  const { disableOverlay } = useOverlayStore();
  const { label, callback } = builder();
  const onPress = useCallback(() => {
    callback();
    closeContextMenu();
    disableOverlay();
  }, [callback, disableOverlay, closeContextMenu]);

  return <ContextMenuItemPresenter label={label} onPress={onPress} />;
};

export default ContextMenuItemContainer;
