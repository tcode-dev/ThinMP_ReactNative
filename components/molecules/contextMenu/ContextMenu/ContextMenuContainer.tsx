import { useCallback, useRef } from "react";
import { Dimensions, GestureResponderEvent, View } from "react-native";
import ContextMenuPresenter, { Props as ContextMenuPresenterProps } from "./ContextMenuPresenter";
import { useContextMenuStore, ContextMenuOpenProps } from "@/store/contextMenuStore";
import { useOverlayStore } from "@/store/overlayStore";

export type Props = Pick<ContextMenuPresenterProps, 'onPress' | 'children'> & Pick<ContextMenuOpenProps, 'list'>;

const ContextMenuContainer: React.FC<Props> = ({ onPress, children, list }) => {
  const { setContextMenu } = useContextMenuStore();
  const { enableOverlay } = useOverlayStore();
  const containerRef = useRef<View>(null);
  const open = useCallback((event: GestureResponderEvent) => {
    if (containerRef.current) {
      containerRef.current.measureInWindow((x, y, width, height) => {
        const screenWidth = Dimensions.get('window').width;
        const screenHeight = Dimensions.get('window').height;
        const isBelow = (screenHeight * 0.7) > y;
        const top = isBelow ? y + height : y - list.length * 50;
        const right = screenWidth - x - width;
        const position = { top, right };

        setContextMenu({ isOpen: true, list, position });
        enableOverlay();
      });
    }
  }, [enableOverlay, list, setContextMenu]);

  return <View ref={containerRef}><ContextMenuPresenter onPress={onPress} open={open}>{children}</ContextMenuPresenter></View>;
};

export default ContextMenuContainer;
