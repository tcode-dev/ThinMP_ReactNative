import Constants from 'expo-constants';
import { useCallback, useRef } from 'react';
import { Dimensions, GestureResponderEvent, Platform, TouchableOpacity, View } from 'react-native';
import { useContextMenuStore, ContextMenuOpenProps } from '@/store/contextMenuStore';

export type Props = {
  children: (open: (event: GestureResponderEvent) => void) => React.ReactNode;
} & Pick<ContextMenuOpenProps, 'list'>;

const ContextMenuContainer: React.FC<Props> = ({ children, list }) => {
  const { openContextMenu } = useContextMenuStore();
  const containerRef = useRef<View>(null);
  const open = useCallback(
    (event: GestureResponderEvent) => {
      if (containerRef.current) {
        containerRef.current.measureInWindow((x, y, width, height) => {
          const screenWidth = Dimensions.get('window').width;
          const screenHeight = Dimensions.get('window').height;
          const isBelow = screenHeight * 0.7 > y;
          const top = Platform.select({
            android: isBelow ? y + height : y - list.length * 50,
            ios: isBelow ? y - Constants.statusBarHeight : y - height - Constants.statusBarHeight - list.length * 50,
          })!;
          const right = screenWidth - x - width + 10;
          const position = { top, right };

          openContextMenu({ list: list, position });
        });
      }
    },
    [list, openContextMenu],
  );

  return (
    <View ref={containerRef}>
      {children(open)}
    </View>
  );
};

export default ContextMenuContainer;
