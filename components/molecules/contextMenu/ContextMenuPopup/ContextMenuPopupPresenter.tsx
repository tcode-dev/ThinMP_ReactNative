import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import ContextMenuItem from '@/components/molecules/contextMenu/ContextMenuItem';
import { Props as ContextMenuStoreProps } from "@/store/contextMenuStore";

export type Props = {
  style?: StyleProp<ViewStyle>;
} & Pick<ContextMenuStoreProps, 'list'>

const ContextMenuPopupPresenter: React.FC<Props> = ({ list, style }) => (
  <View style={[styles.container, style]}>
    <BlurView style={styles.blur} intensity={100} />
    {list.map((item, index) => (
      <ContextMenuItem label={item.label} onPress={item.callback} key={index} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1001,
  },
  blur: {
    zIndex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});

export default ContextMenuPopupPresenter;
