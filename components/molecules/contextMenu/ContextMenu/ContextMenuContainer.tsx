import { GestureResponderEvent } from "react-native";
import ContextMenuPresenter, { Props as ContextMenuPresenterProps } from "./ContextMenuPresenter";
import { useContextMenuStore, Props as ContextMenuStoreProps } from "@/store/contextMenuStore";
import { useOverlayStore } from "@/store/overlayStore";

export type Props = Pick<ContextMenuPresenterProps, 'onPress' | 'children'> & Pick<ContextMenuStoreProps, 'list'>;

const ContextMenuContainer: React.FC<Props> = ({ onPress, children, list }) => {
  const { setContextMenu } = useContextMenuStore();
  const { enableOverlay } = useOverlayStore();
  const open = (event: GestureResponderEvent) => {
    const { locationX, pageY } = event.nativeEvent;

    setContextMenu({ isOpen: true, list, position: { x: locationX, y: pageY } });
    enableOverlay();
  };

  return <ContextMenuPresenter onPress={onPress} open={open}>{children}</ContextMenuPresenter>;
};

export default ContextMenuContainer;
