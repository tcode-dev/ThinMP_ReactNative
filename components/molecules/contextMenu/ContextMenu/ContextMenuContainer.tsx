import Constants from 'expo-constants';
import { useCallback, useRef } from 'react';
import { Dimensions, GestureResponderEvent, Platform, View } from 'react-native';
import ContextMenuPresenter, { Props as ContextMenuPresenterProps } from './ContextMenuPresenter';
import { useContextMenuStore, ContextMenuOpenProps } from '@/store/contextMenuStore';
import { useOverlayStore } from '@/store/overlayStore';

export type Props = Pick<ContextMenuPresenterProps, 'onPress' | 'children'> & Pick<ContextMenuOpenProps, 'builders'>;

const ContextMenuContainer: React.FC<Props> = ({ onPress, children, builders }) => {
  const { openContextMenu } = useContextMenuStore();
  const { enableOverlay } = useOverlayStore();
  const containerRef = useRef<View>(null);
  const open = useCallback(
    (event: GestureResponderEvent) => {
      if (containerRef.current) {
        containerRef.current.measureInWindow((x, y, width, height) => {
          const screenWidth = Dimensions.get('window').width;
          const screenHeight = Dimensions.get('window').height;
          const isBelow = screenHeight * 0.7 > y;
          const top = Platform.select({
            android: isBelow ? y + height : y - builders.length * 50,
            ios: isBelow ? y - Constants.statusBarHeight : y - height - Constants.statusBarHeight - builders.length * 50,
          })!;
          const right = screenWidth - x - width + 10;
          const position = { top, right };

          openContextMenu({ builders, position });
          enableOverlay();
        });
      }
    },
    [builders, enableOverlay, openContextMenu],
  );

  return (
    <View ref={containerRef}>
      <ContextMenuPresenter onPress={onPress} open={open}>
        {children}
      </ContextMenuPresenter>
    </View>
  );
};

export default ContextMenuContainer;
