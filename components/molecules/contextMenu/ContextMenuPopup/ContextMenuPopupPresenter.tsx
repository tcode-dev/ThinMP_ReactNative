import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import BackgroundBlurView from '@/components/atoms/BackgroundBlurView';
import ContextMenuItem from '@/components/molecules/contextMenu/ContextMenuItem';
import Overlay from '@/components/molecules/Overlay';
import { ContextMenuOpenProps } from '@/store/contextMenuStore';

export type Props = {
  style?: StyleProp<ViewStyle>;
} & Pick<ContextMenuOpenProps, 'list'>;

const ContextMenuPopupPresenter: React.FC<Props> = ({ list, style }) => (
  <>
    <Overlay />
    <View style={[styles.container, style]}>
      <BackgroundBlurView />
      <View style={styles.inner}>
        {list.map((item, index) => (
          <ContextMenuItem contextMenu={item} key={index} />
        ))}
      </View>
    </View>
  </>
);

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

export default ContextMenuPopupPresenter;
