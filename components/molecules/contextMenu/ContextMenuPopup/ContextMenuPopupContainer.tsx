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
    top: contextMenu.measure.top,
    right: contextMenu.measure.right,
    ...Platform.select({
      android: {
        backgroundColor: color.background,
      },
    })
  };

  return <ContextMenuPopupPresenter ref={containerRef} list={contextMenu.list} style={style} />;
}

export default ContextMenuPopupContainer;
