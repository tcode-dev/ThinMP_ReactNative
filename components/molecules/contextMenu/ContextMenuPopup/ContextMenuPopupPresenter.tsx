import React, { forwardRef } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import BackgroundBlurView from '@/components/atoms/BackgroundBlurView';
import ContextMenuItem from '@/components/molecules/contextMenu/ContextMenuItem';
import { ContextMenuOpenProps } from '@/store/contextMenuStore';

export type Props = {
  ref: React.RefObject<View>;
  style?: StyleProp<ViewStyle>;
} & Pick<ContextMenuOpenProps, 'list'>;

const ContextMenuPopupPresenter = forwardRef<View, Props>(({ list, style }, ref) => (
  <View ref={ref} style={[styles.container, style]}>
    <BackgroundBlurView />
    <View style={styles.inner}>
      {list.map((item, index) => (
        <ContextMenuItem contextMenu={item} key={index} />
      ))}
    </View>
  </View>
));

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1001,
    borderRadius: 4,
    overflow: 'hidden',
  },
  inner: {
    zIndex: 2,
    position: 'relative',
  },
});

ContextMenuPopupPresenter.displayName = 'ContextMenuPopupPresenter';

export default ContextMenuPopupPresenter;
