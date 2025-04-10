import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

type Props = {
  backgroundColor: string;
  iconColor: string;
};

const LoadingPresenter = ({ backgroundColor, iconColor }: Props) => (
  <View style={[styles.container, { backgroundColor }]}>
    <ActivityIndicator size="large" color={iconColor} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingPresenter;