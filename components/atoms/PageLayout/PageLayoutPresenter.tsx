import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export type Props = {
  children: ReactNode;
  backgroundColor: string;
};

const PageContainer: React.FC<Props> = ({ children, backgroundColor }) => {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={[styles.container, { backgroundColor }]}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
});

export default PageContainer;
