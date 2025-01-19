import { Platform } from "react-native";
import ContextMenuPopupPresenter from "./ContextMenuPopupPresenter";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useContextMenuStore } from "@/store/contextMenuStore";

const ContextMenuPopupContainer = () => {
  const color = useThemeColor();
  const { contextMenu } = useContextMenuStore();
  const style = {
    top: contextMenu.position.y,
    right: contextMenu.position.x,
    ...Platform.select({
      android: {
        backgroundColor: color.background,
      },
    })
  };

  if (!contextMenu.isOpen) return null;

  return <ContextMenuPopupPresenter list={contextMenu.list} style={style} />;
}

export default ContextMenuPopupContainer;
