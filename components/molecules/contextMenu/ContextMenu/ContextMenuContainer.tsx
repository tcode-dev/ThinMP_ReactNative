import { useCallback, useRef } from "react";
import { Dimensions, GestureResponderEvent, View } from "react-native";
import ContextMenuPresenter, { Props as ContextMenuPresenterProps } from "./ContextMenuPresenter";
import { useContextMenuStore, Props as ContextMenuStoreProps } from "@/store/contextMenuStore";
import { useOverlayStore } from "@/store/overlayStore";

export type Props = Pick<ContextMenuPresenterProps, 'onPress' | 'children'> & Pick<ContextMenuStoreProps, 'list'>;

const ContextMenuContainer: React.FC<Props> = ({ onPress, children, list }) => {
  const { setContextMenu } = useContextMenuStore();
  const { enableOverlay } = useOverlayStore();
  const containerRef = useRef<View>(null);
  const open = useCallback((event: GestureResponderEvent) => {
    if (containerRef.current) {
      containerRef.current.measureInWindow((x, y, width, height) => {
        const screenWidth = Dimensions.get('window').width;
        const top = y + height;
        const right = screenWidth - x - width;

        setContextMenu({ isOpen: true, list, position: { x: right, y: top } });
        enableOverlay();
      });
    }
  }, [enableOverlay, list, setContextMenu]);

  return <View ref={containerRef}><ContextMenuPresenter onPress={onPress} open={open}>{children}</ContextMenuPresenter></View>;
};

export default ContextMenuContainer;
