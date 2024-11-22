import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export type Props = {
  children: ReactNode;
};

const PageContainer: React.FC<Props> = ({ children }) => {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={[styles.container]}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default PageContainer;
