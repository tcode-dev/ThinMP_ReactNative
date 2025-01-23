import React, { forwardRef } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import BackgroundBlurView from '@/components/atoms/BackgroundBlurView';
import ContextMenuItem from '@/components/molecules/contextMenu/ContextMenuItem';
import { ContextMenuOpenProps } from "@/store/contextMenuStore";

export type Props = {
  ref: React.RefObject<View>;
  style?: StyleProp<ViewStyle>;
} & Pick<ContextMenuOpenProps, 'builders'>

const ContextMenuPopupPresenter = forwardRef<View, Props>(({ builders, style }, ref) => (
  <View ref={ref} style={[styles.container, style]}>
    <BackgroundBlurView />
    <View style={styles.inner}>
      {builders.map((builder, index) => (
        <ContextMenuItem builder={builder} key={index} />
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
  }
});

ContextMenuPopupPresenter.displayName = 'ContextMenuPopupPresenter';

export default ContextMenuPopupPresenter;
