import { useEffect, useRef, useState } from "react";
import { Dimensions, Platform, View } from "react-native";
import ContextMenuPopupPresenter from "./ContextMenuPopupPresenter";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useContextMenuStore } from "@/store/contextMenuStore";

const ContextMenuPopupContainer = () => {
  const color = useThemeColor();
  const { contextMenu } = useContextMenuStore();
  const containerRef = useRef<View>(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (!contextMenu.isOpen) return;

    if (containerRef.current) {
      containerRef.current.measure((x, y, width, height) => {
        if (!contextMenu.isOpen) return null;

        const screenWidth = Dimensions.get('window').width;
        const screenHeight = Dimensions.get('window').height;
        const right = screenWidth - contextMenu.measure.x - contextMenu.measure.width;
        const isBelow = (screenHeight * 0.7) > contextMenu.measure.y;
        const top = isBelow ? contextMenu.measure.y + contextMenu.measure.heigh : contextMenu.measure.y - height;
        const style = {
          top,
          right,
          ...Platform.select({
            android: {
              backgroundColor: color.background,
            },
          })
        };

        setStyle(style);
      });
    }
    return () => setStyle({});
  }, [color.background, contextMenu]);

  if (!contextMenu.isOpen || !style) return null;

  return<ContextMenuPopupPresenter ref={containerRef} list={contextMenu.list} style={style} />;
}

export default ContextMenuPopupContainer;
