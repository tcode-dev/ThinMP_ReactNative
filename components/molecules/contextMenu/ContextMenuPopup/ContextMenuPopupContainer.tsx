import { useRef } from "react";
import { Platform, View } from "react-native";
import ContextMenuPopupPresenter from "./ContextMenuPopupPresenter";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useContextMenuStore } from "@/store/contextMenuStore";

const ContextMenuPopupContainer = () => {
  const color = useThemeColor();
  const { contextMenu } = useContextMenuStore();
  const containerRef = useRef<View>(null);

  if (!contextMenu.isOpen) return null;

  const style = {
    top: contextMenu.position.top,
    right: contextMenu.position.right,
    ...Platform.select({
      android: {
        backgroundColor: color.onBackground,
      },
    })
  };
  const intensity = Platform.select({
    android: undefined,
    ios: 100,
    default: undefined,
  });

  return <ContextMenuPopupPresenter ref={containerRef} list={contextMenu.list} style={style} intensity={intensity} />;
}

export default ContextMenuPopupContainer;
