import ContextMenuPopupPresenter from "./ContextMenuPopupPresenter";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useContextMenuStore } from "@/store/contextMenuStore";

const ContextMenuPopupContainer = () => {
  const color = useThemeColor();
  const { contextMenu } = useContextMenuStore();

  if (!contextMenu.isOpen) return null;

  return <ContextMenuPopupPresenter list={contextMenu.list} position={contextMenu.position} backgroundColor={color.background} />;
}

export default ContextMenuPopupContainer;
