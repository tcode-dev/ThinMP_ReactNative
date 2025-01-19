import React from 'react';
import { StyleSheet, View } from 'react-native';
import ContextMenuItem from '@/components/molecules/contextMenu/ContextMenuItem';
import { Props as ContextMenuStoreProps } from "@/store/contextMenuStore";

export type Props = { backgroundColor: string } & Pick<ContextMenuStoreProps, 'list' | 'position'>

const ContextMenuPopupPresenter: React.FC<Props> = ({ list, position, backgroundColor }) => (
  <View style={[styles.container, { backgroundColor, top: position.y, right: position.x }]}>
    {list.map((item, index) => (
      <ContextMenuItem label={item.label} onPress={item.callback} key={index} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1001,
  }
});

export default ContextMenuPopupPresenter;
