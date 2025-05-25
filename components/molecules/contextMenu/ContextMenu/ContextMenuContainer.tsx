import Constants from 'expo-constants';
import { useCallback, useRef } from 'react';
import { GestureResponderEvent, Platform, useWindowDimensions, View } from 'react-native';
import { Style } from '@/constants/Style';
import { useContextMenuStore, ContextMenuOpenProps } from '@/store/contextMenuStore';

export type Props = {
  children: (open: (event: GestureResponderEvent) => void) => React.ReactNode;
} & Pick<ContextMenuOpenProps, 'list'>;

const ContextMenuContainer: React.FC<Props> = ({ children, list }) => {
  const { openContextMenu } = useContextMenuStore();
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const containerRef = useRef<View>(null);
  const open = useCallback(
    (event: GestureResponderEvent) => {
      if (containerRef.current) {
        containerRef.current.measureInWindow((x, y, width, height) => {
          const isBelow = screenHeight * 0.7 > y;
          const top = Platform.select({
            android: isBelow ? y + height : y - list.length * Style.rowHeight,
            ios:
              height === Style.rowHeight
                ? isBelow
                  ? y - Constants.statusBarHeight + list.length * Style.rowHeight
                  : y - height - Constants.statusBarHeight
                : isBelow
                  ? y - Constants.statusBarHeight + list.length * Style.rowHeight + height
                  : y - Constants.statusBarHeight,
          })!;
          const right = screenWidth - x - width + 10;
          const position = { top, right };

          openContextMenu({ list: list, position });
        });
      }
    },
    [list, screenHeight, screenWidth, openContextMenu],
  );

  return <View ref={containerRef}>{children(open)}</View>;
};

export default ContextMenuContainer;
