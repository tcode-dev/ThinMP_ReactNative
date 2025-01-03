import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

export type Props = {
  children: ReactNode;
  backgroundColor: string;
};

const PageLayoutPresenter: React.FC<Props> = ({ children, backgroundColor }) => {
  return (
    <>
      <StatusBar hidden />
      <View style={[styles.container, { backgroundColor }]}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

export default PageLayoutPresenter;
