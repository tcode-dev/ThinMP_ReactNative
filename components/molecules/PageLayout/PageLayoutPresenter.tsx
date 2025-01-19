import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import ContextMenuPopup from '../contextMenu/ContextMenuPopup';
import Overlay from '../Overlay';

export type Props = {
  children: ReactNode;
  backgroundColor: string;
};

const PageLayoutPresenter: React.FC<Props> = ({ children, backgroundColor }) => (
  <>
    <StatusBar hidden />
    <View style={[styles.container, { backgroundColor }]}>{children}</View>
    <Overlay />
    <ContextMenuPopup />
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

export default PageLayoutPresenter;
