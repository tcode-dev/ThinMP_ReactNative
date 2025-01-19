import { BlurView } from 'expo-blur';
import React, { forwardRef } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import ContextMenuItem from '@/components/molecules/contextMenu/ContextMenuItem';
import { ContextMenuOpenProps } from "@/store/contextMenuStore";

export type Props = {
  ref: React.RefObject<View>;
  style?: StyleProp<ViewStyle>;
  intensity?: number | undefined
} & Pick<ContextMenuOpenProps, 'list'>

const ContextMenuPopupPresenter = forwardRef<View, Props>(({ list, style, intensity }, ref) => (
  <View ref={ref} style={[styles.container, style]}>
    <BlurView style={styles.blur} intensity={intensity} />
    <View style={styles.inner}>
      {list.map((item, index) => (
        <ContextMenuItem label={item.label} onPress={item.callback} key={index} />
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
  blur: {
    zIndex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  inner: {
    zIndex: 2,
    position: 'relative',
  }
});

ContextMenuPopupPresenter.displayName = 'ContextMenuPopupPresenter';

export default ContextMenuPopupPresenter;