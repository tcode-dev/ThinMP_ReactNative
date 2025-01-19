import { useCallback, useRef } from "react";
import { GestureResponderEvent, View } from "react-native";
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
      containerRef.current.measureInWindow((x, y, width, heigh) => {
        const measure = {
          x, y, width, heigh
        }

        setContextMenu({ isOpen: true, list, measure });
        enableOverlay();
      });
    }
  }, [enableOverlay, list, setContextMenu]);

  return <View ref={containerRef}><ContextMenuPresenter onPress={onPress} open={open}>{children}</ContextMenuPresenter></View>;
};

export default ContextMenuContainer;
